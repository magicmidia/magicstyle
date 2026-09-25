import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsPagination } from "../src/index.ts";

describe("MsPagination component", () => {
  it("renders page items based on total and pageSize", () => {
    const wrapper = mount(MsPagination, {
      props: { total: 50, pageSize: 10, currentPage: 1 },
    });
    expect(wrapper.find(".ms-pagination").exists()).toBe(true);
    expect(wrapper.text()).toContain("50 items in total");
    const activeItem = wrapper.find(".ms-pagination__item--active");
    expect(activeItem.text()).toBe("1");
  });

  it("navigates to next page on click", async () => {
    const wrapper = mount(MsPagination, {
      props: { total: 50, pageSize: 10, currentPage: 1 },
    });
    const nextBtn = wrapper.find("button.ms-pagination__next");
    await nextBtn.trigger("click");
    expect(wrapper.emitted("update:currentPage")?.[0]).toEqual([2]);
    expect(wrapper.emitted("change")?.[0]).toEqual([2]);
  });

  it("disables prev and first button on first page", () => {
    const wrapper = mount(MsPagination, {
      props: { total: 50, pageSize: 10, currentPage: 1 },
    });
    const prevBtn = wrapper.find("button.ms-pagination__prev");
    const firstBtn = wrapper.find("button.ms-pagination__first");
    expect(prevBtn.attributes("disabled")).toBeDefined();
    expect(firstBtn.attributes("disabled")).toBeDefined();
  });
});
