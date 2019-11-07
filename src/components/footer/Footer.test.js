import React from "react";
import { shallow } from "enzyme";
import store from "../../redux/store";
import { Footer } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Footer store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
