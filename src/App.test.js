import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../Utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          id: 1,
          title: "One title",
          description: "One description",
        },
        {
          id: 2,
          title: "One title 2",
          description: "One description 2",
        },
        {
          id: 3,
          title: "One title 3",
          description: "One description 3",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "App");
    expect(component.length).toBe(1);
  });
});
