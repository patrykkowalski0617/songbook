import React from "react";
import { shallow } from "enzyme";
import store from "../../../redux/store";
import { LyricsBody } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<LyricsBody store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
