import React from "react";
import { shallow } from "enzyme";
import { Main } from ".";
import store from "../../redux/store";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Main store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
