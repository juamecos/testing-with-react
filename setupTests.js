import Enzyme from "enzyme";
import Enzymedapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Enzymedapter(),
  disableLifecycleMethods: true,
});
