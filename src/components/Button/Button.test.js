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
    let mockFunc;
    beforeEach(() => {
      mockFunc=jest.fn();
      const props = {
        buttonText: "buttonText",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<Button {...props}/>);
    });
    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("should emit callback on click event", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
