import React from "react";
import { shallow } from "enzyme";
import store from "../../../redux/store";
import { Countdown } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Countdown store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
