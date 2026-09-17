import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MsTable from "../src/components/MsTable/MsTable.vue";
import MsTableHead from "../src/components/MsTable/MsTableHead.vue";
import MsTableBody from "../src/components/MsTable/MsTableBody.vue";
import MsTableRow from "../src/components/MsTable/MsTableRow.vue";
import MsTableHeaderCell from "../src/components/MsTable/MsTableHeaderCell.vue";
import MsTableCell from "../src/components/MsTable/MsTableCell.vue";
import MsTableFooter from "../src/components/MsTable/MsTableFooter.vue";

describe("MsTable Suite (Doc 05 §10)", () => {
  it("renders semantic table hierarchy with container and caption", () => {
    const wrapper = mount(MsTable, {
      props: {
        caption: "Users directory",
      },
      slots: {
        default: `
          <MsTableHead>
            <MsTableRow>
              <MsTableHeaderCell>Name</MsTableHeaderCell>
              <MsTableHeaderCell>Role</MsTableHeaderCell>
            </MsTableRow>
          </MsTableHead>
          <MsTableBody>
            <MsTableRow>
              <MsTableCell>Alice</MsTableCell>
              <MsTableCell>Admin</MsTableCell>
            </MsTableRow>
          </MsTableBody>
        `,
      },
      global: {
        components: {
          MsTableHead,
          MsTableBody,
          MsTableRow,
          MsTableHeaderCell,
          MsTableCell,
        },
      },
    });

    expect(wrapper.classes()).toContain("ms-table-container");
    const table = wrapper.find("table");
    expect(table.classes()).toContain("ms-table");
    expect(table.classes()).toContain("ms-table--md");
    expect(wrapper.find(".ms-table__caption").text()).toBe("Users directory");
    expect(wrapper.findAll("th").length).toBe(2);
    expect(wrapper.findAll("td").length).toBe(2);
  });

  it("applies striped, bordered, and hoverable modifier classes", () => {
    const wrapper = mount(MsTable, {
      props: {
        striped: true,
        bordered: true,
        hoverable: false,
      },
    });

    const table = wrapper.find("table");
    expect(table.classes()).toContain("ms-table--striped");
    expect(table.classes()).toContain("ms-table--bordered");
    expect(table.classes()).not.toContain("ms-table--hoverable");
  });

  it("applies density classes xs, sm, md, lg, xl", () => {
    const wrapperXs = mount(MsTable, { props: { density: "xs" } });
    expect(wrapperXs.find("table").classes()).toContain("ms-table--xs");

    const wrapperSm = mount(MsTable, { props: { density: "sm" } });
    expect(wrapperSm.find("table").classes()).toContain("ms-table--sm");

    const wrapperLg = mount(MsTable, { props: { density: "lg" } });
    expect(wrapperLg.find("table").classes()).toContain("ms-table--lg");

    const wrapperXl = mount(MsTable, { props: { density: "xl" } });
    expect(wrapperXl.find("table").classes()).toContain("ms-table--xl");
  });

  it("applies variant and stickyHeader modifier classes", () => {
    const wrapper = mount(MsTable, {
      props: {
        variant: "surface",
        stickyHeader: true,
      },
    });

    expect(wrapper.classes()).toContain("ms-table-container--surface");
    expect(wrapper.find("table").classes()).toContain("ms-table--sticky-header");
  });

  it("handles sortable header cell and emits click with aria-sort", async () => {
    const wrapper = mount(MsTableHeaderCell, {
      props: {
        sortable: true,
        sortDirection: "asc",
        align: "right",
      },
      slots: {
        default: "Price",
      },
    });

    expect(wrapper.classes()).toContain("ms-table__th--sortable");
    expect(wrapper.attributes("data-align")).toBe("right");
    expect(wrapper.attributes("aria-sort")).toBe("ascending");
    expect(wrapper.find(".ms-table__sort-icon").exists()).toBe(true);

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("manages selected and clickable row states", async () => {
    const wrapper = mount(MsTableRow, {
      props: {
        selected: true,
        clickable: true,
      },
      slots: {
        default: "<td>Content</td>",
      },
    });

    expect(wrapper.attributes("data-selected")).toBe("true");
    expect(wrapper.attributes("data-clickable")).toBe("true");

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("renders cell alignments left, center, right and table footer", () => {
    const wrapper = mount({
      components: {
        MsTable,
        MsTableBody,
        MsTableRow,
        MsTableCell,
        MsTableFooter,
      },
      template: `
        <MsTable>
          <MsTableBody>
            <MsTableRow>
              <MsTableCell align="left">Left</MsTableCell>
              <MsTableCell align="center">Center</MsTableCell>
              <MsTableCell align="right">Right</MsTableCell>
            </MsTableRow>
          </MsTableBody>
          <MsTableFooter>
            <MsTableRow>
              <MsTableCell align="right">Total: $100</MsTableCell>
            </MsTableRow>
          </MsTableFooter>
        </MsTable>
      `,
    });

    const cells = wrapper.findAll(".ms-table__td");
    expect(cells[0]!.attributes("data-align")).toBe("left");
    expect(cells[1]!.attributes("data-align")).toBe("center");
    expect(cells[2]!.attributes("data-align")).toBe("right");
    expect(wrapper.find("tfoot").classes()).toContain("ms-table__footer");
  });
});
