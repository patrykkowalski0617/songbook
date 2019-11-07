import React from "react";
import { shallow } from "enzyme";
import store from "../../redux/store";
import { HeaderButtons } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<HeaderButtons store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
