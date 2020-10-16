import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../../Utils";
import ListItem from "./ListItem";

describe("ListItem Component", () => {
  describe("Checking Proptypes", () => {
    it("should NOT throw a warning", () => {
      const expectedProps = {
        title: "Title",
        description: "Description",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Component renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Title",
        description: "Description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without error ", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("should render a description", () => {
      const description = findByTestAttr(wrapper, "componentDescription");
      expect(description.length).toBe(1);
    });
  });

  describe("Should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: "Description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
