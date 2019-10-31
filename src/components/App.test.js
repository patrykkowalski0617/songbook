import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import store from "../redux/store";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<App store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
