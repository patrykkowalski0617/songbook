import React from "react";
import { shallow } from "enzyme";
import { LyricsList } from ".";
import store from "../../redux/store";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<LyricsList store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
