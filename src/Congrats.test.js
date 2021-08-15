import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-17-updated";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });
