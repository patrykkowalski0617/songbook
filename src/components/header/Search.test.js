import React from "react";
import { shallow } from "enzyme";
import store from "../../redux/store";
import { Search } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Search store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
