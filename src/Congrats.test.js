import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-17-updated";
import Congrats from "./Congrats";

import { findByTestAttr } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without errors", () => {});

test("renders no test when `success` props is false", () => {});

test("renders no-empty congrats message when `success` props is true", () => {});
