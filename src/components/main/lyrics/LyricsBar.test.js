import React from "react";
import { shallow } from "enzyme";
import { LyricsBar } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<LyricsBar />);
        expect(wrapper).toMatchSnapshot();
    });
});
