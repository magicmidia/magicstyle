import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsDropzone } from "../src/index.ts";

describe("MsDropzone component", () => {
  it("renders upload trigger with title and subtitle", () => {
    const wrapper = mount(MsDropzone, {
      slots: {
        title: "Envie seus documentos",
        subtitle: "Formatos aceitos: PDF, PNG, JPG",
      },
    });
    expect(wrapper.classes()).toContain("ms-dropzone");
    expect(wrapper.text()).toContain("Envie seus documentos");
    expect(wrapper.text()).toContain("Formatos aceitos: PDF, PNG, JPG");
  });

  it("handles drop event with files", async () => {
    const wrapper = mount(MsDropzone);
    const fakeFile = new File(["dummy content"], "example.txt", { type: "text/plain" });

    await wrapper.trigger("drop", {
      dataTransfer: {
        files: [fakeFile],
      },
    });

    expect(wrapper.emitted("files-dropped")?.[0]).toBeTruthy();
    expect(wrapper.findAll(".ms-dropzone__file-card").length).toBe(1);
  });
});
