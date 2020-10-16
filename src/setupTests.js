import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./createStore";
Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe("APP", () => {
  Enzyme.shallow(<App store={store} />);
});
