import React from "react";
import { shallow } from "enzyme";
import findByTestAttr from "../../utils/findByTestAttr";
import checkProps from "../../utils/checkProps";
import Button from "./index";

describe("Button component", () => {
  describe("checking prop-types", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        buttonText: "buttonText",
        emitEvent: () => {},
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("renders", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Button />);
    });
    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
    
  });
});
