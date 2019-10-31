import React from "react";
import { shallow } from "enzyme";
import store from "../../../redux/store";
import { Counter } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Counter store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
