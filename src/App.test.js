import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without errs", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
