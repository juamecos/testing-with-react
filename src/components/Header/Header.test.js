import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import { findByTestAttr } from "./../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test("should render without errors", () => {
    console.log(component.debug());
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
  test("should render a logo", () => {
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
