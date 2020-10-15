import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

import { findByTestAttr, checkProps } from "./../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

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
