import React from "react";
import { shallow } from "enzyme";
import store from "../../redux/store";
import { TutorialPopUp } from ".";

describe("Examining rendering", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<TutorialPopUp store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
