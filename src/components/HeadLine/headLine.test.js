import React from "react";
import { shallow } from "enzyme";
import HeadLine from "./index";

import findByTestAttr from "../../utils/findByTestAttr";
import checkProps from "../../utils/checkProps.js";

//() => {}

const setUp = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};

// console.log(setUp())
// console.log('checkProps=', checkProps)

describe("headline component", () => {
  describe("checking prop types", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "test header",
        description: "test description",
        tempArray: [
          {
            fName: "test fName",
            lName: "test lName",
            email: "test email",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      // console.log(HeadLine.propTypes);
      // console.log(HeadLine.name);
      const propsError = checkProps(HeadLine, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  // render with props
  describe("have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        description: "Test description",
      };
      component = setUp(props);
      // console.log("wrapper=", wrapper);
    });

    it("should render without errors", () => {
      const wrapper = findByTestAttr(component, "HeadLineComponent");
      // console.log("wrapper=", wrapper);
      expect(wrapper.length).toBe(1);
    });
    it("should render a h2", () => {
      const h2 = findByTestAttr(component, "header");
      // console.log(component.debug())
      expect(h2.length).toBe(1);
    });
    it("should render a p", () => {
      const p = findByTestAttr(component, "description");
      // console.log(component.debug())
      expect(p.length).toBe(1);
    });
  });
  // render without props
  describe("do not have props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "HeadLineComponent");
      expect(component.length).toBe(0);
    });
  });
});
