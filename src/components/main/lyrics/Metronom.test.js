import React from "react";
import { shallow } from "enzyme";
import store from "../../../redux/store";
import { Metronom } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Metronom store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
