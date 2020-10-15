import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

import { findByTestAttr } from "./../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("has props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "test Header",
        description: "Test Desc",
      };
      wrapper = setUp(props);
    });
    it("render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("should render a header", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("should render a description paragraph", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("has no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
