import React from "react";
import { shallow } from "enzyme";
import store from "../../redux/store";
import { Header } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Header store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
