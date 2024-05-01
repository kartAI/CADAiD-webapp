import { act, fireEvent, render } from "@testing-library/react";
import DropBox from "./DropBox";
import userEvent from "@testing-library/user-event";

function dispatchEvt(node: HTMLInputElement, type: string, data: {}) {
    const event = new Event(type, { bubbles: true });
    Object.assign(event, data);
    fireEvent(node, event);
}

async function flushPromises(rerender: any, component: any) {
    await act(() => (() => rerender(component)));
}

function mockData(files: File[]) {
    return {
      dataTransfer: {
        files,
        items: files.map((file) => ({
          kind: 'file',
          type: file.type,
          getAsFile: () => file,
        })),
        types: ['Files'],
      }
    }
}



test("upload multiple files manually", () => {
    const files = [
      new File(["img1"], "img1.jpg", { type: "image/jpeg" }),
      new File(["img2"], "img2.jpg", { type: "image/jpeg" })
    ]

    const props = {
        onDrop: jest.fn()
    }

    const { getByTestId } = render(<DropBox {...props} />)
    const input = getByTestId("dropzone-input") as HTMLInputElement

    userEvent.upload(input, files);
  
    expect(input.files).toHaveLength(2);
    expect(input.files && input.files[0]).toStrictEqual(files[0])
    expect(input.files && input.files[1]).toStrictEqual(files[1])
  })

  test("test if component are droppable", async() => {

    const files = [
        new File(["test"], "test.jpeg", { type: "image/jpeg"})
    ]

    const mockFn = jest.fn();

    const { getByTestId, rerender } = render(<DropBox onDrop={mockFn} />)
    const dropzone = getByTestId("dropzone-root") as HTMLInputElement
  
    const data = mockData(files);

    dispatchEvt(dropzone, "drop", data);
    await flushPromises(rerender, <DropBox onDrop={mockFn} />);

    expect(mockFn).toHaveBeenCalled()
  })


  test("If files are in the wrong format, uploads will be empty", async () => {

    const files = [
      new File(["html"], "html.html", { type: "text/html" }),
      new File(["video"], "video.mp4", { type: "video/mp4"})
    ]
    const mockFn = jest.fn();

    const { getByTestId, rerender } = render(<DropBox onDrop={mockFn} />)
    const dropzone = getByTestId("dropzone-root") as HTMLInputElement
  
    const data = mockData(files);

    dispatchEvt(dropzone, "drop", data);
    await flushPromises(rerender, <DropBox onDrop={mockFn} />);
  
    expect(mockFn.mock.calls[0][0]).toHaveLength(0)
  })


  test("upload only acceptable files", async() => {

    const files = [
        new File(["html"], "html.html", { type: "text/html" }),
        new File(["accepted"], "accepted.pdf", { type: "application/pdf"}),
        new File(["test"], "test.jpeg", { type: "image/jpeg"})
    ]

    const mockFn = jest.fn();

    const { getByTestId, rerender } = render(<DropBox onDrop={mockFn} />)
    const dropzone = getByTestId("dropzone-root") as HTMLInputElement
  
    const data = mockData(files);

    dispatchEvt(dropzone, "drop", data);
    await flushPromises(rerender, <DropBox onDrop={mockFn} />);

    expect(mockFn.mock.calls[0][0]).toHaveLength(2)
    expect(mockFn.mock.calls[0][0]).not.toContainEqual(expect.objectContaining({ path: "html.html" }))
    expect(mockFn.mock.calls[0][0]).toContainEqual(expect.objectContaining({ path: "accepted.pdf" }))
    expect(mockFn.mock.calls[0][0]).toContainEqual(expect.objectContaining({ path: "test.jpeg" }))
  })