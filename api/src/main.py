from fastapi.middleware.cors import CORSMiddleware
import cv2
import os
from concurrent.futures import ThreadPoolExecutor
from fastapi import FastAPI, UploadFile, HTTPException, status
from pathlib import Path
from pdf2image import convert_from_path
from typing import List
from .object_detection_model import object_detection_model
from .ocr_model import ocr_model
from .segmentation_model import segmentation_model
from .json_response_converter import json_response_converter

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:5000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# store uploaded images temporary folder
UPLOAD_DIRECTORY = Path("static/uploads")
UPLOAD_DIRECTORY.mkdir(parents=True, exist_ok=True)

def detect_and_validate(image, uploaded_file):
    nora: list = object_detection_model(image)

    ada = {}
    eva = {}

    if 'fasade' in nora or 'plantegning' in nora:
        ada, detected_text, detected_text_coordinates = ocr_model(image, nora)
        if 'plantegning' in nora:
            eva = segmentation_model(image, detected_text, detected_text_coordinates)

    return {
        'drawing_types': nora,
        'file_name': uploaded_file.filename,
        **ada,
        **eva
    }

def process_file(uploaded_file):
    detection_response = []
    file_path = f"{UPLOAD_DIRECTORY}/{uploaded_file.filename}"

    with open(file_path, "wb") as file_object:
        file_object.write(uploaded_file.file.read())

    if uploaded_file.filename.lower().endswith('.pdf'):
        input_images = convert_from_path(file_path)
        for image in input_images:
            detection_response.append(detect_and_validate(image, uploaded_file))

    elif uploaded_file.filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        image = cv2.imread(file_path)
        detection_response.append(detect_and_validate(image, uploaded_file))

    if os.path.exists(file_path):
        os.remove(file_path)
    if len(detection_response) > 0:
        return detection_response[0]
    return {}

@app.post("/detect/")
async def detect_objects(uploaded_files: List[UploadFile]):


    # FILE_SIZE = 26214400 # 25 * 1024 * 1024 = 25MB
    # real_file_size = 0

    # for file in uploaded_files:
    #     for chunk in file.file:
    #         real_file_size += len(chunk)
    #         if real_file_size > FILE_SIZE:
    #             raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail="Too large files")
          
    with ThreadPoolExecutor() as executor:

        return json_response_converter(executor.map(process_file, uploaded_files))