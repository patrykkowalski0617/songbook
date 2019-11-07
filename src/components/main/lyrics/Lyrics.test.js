import React from "react";
import { shallow } from "enzyme";
import store from "../../../redux/store";
import { Lyrics } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Lyrics store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
