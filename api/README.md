# CAD-AID API

## Description



## Installation

To install the required dependencies, navigate to the `api` folder and run:

```bash
pip install -r requirements.txt
``` 
Ops `poppler` is also a required dependency. follow the guide on [a link](https://pypi.org/project/pdf2image/)

## Usage

Make sure you are on the right path.

```bash
cd api
``` 

Then, start the application loacly by running:

```bash
uvicorn src.main:app --reload
``` 

## Testing

To run pytests, make sure you are in the `api` folder and then run: 

```bash
pytest
``` 
