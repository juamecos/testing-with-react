import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../../Utils";
import SharedButton from "./Button";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBe(undefined);
    });
  });

  describe("Renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Button Text",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
    it("should emit callback on click event", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
