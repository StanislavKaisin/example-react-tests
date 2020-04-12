import React, { Component } from "react";
import { shallow } from "enzyme";

import findByTestAttr from "../../utils/findByTestAttr";
import checkProps from "../../utils/checkProps.js";

import ListItem from "./ListItem";

describe("ListItem component", () => {
  describe("checking prop-types", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "example title",
        description: "example description",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("component renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "example title",
        description: "example description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("should renders without errors", () => {
      const component = findByTestAttr(wrapper, "ListItemComponent");
      expect(component.length).toBe(1)
    });
    it("should render a title", () => {
      const title = findByTestAttr(wrapper, "ComponentTitle");
      expect(title.length).toBe(1)
    });
    it("should render a description", () => {
      const description = findByTestAttr(wrapper, "ComponentDescription");
      expect(description.length).toBe(1)
    });
  });
  describe('should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: "example description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("should not render without title", () => {
      const component = findByTestAttr(wrapper, "ListItemComponent");
      expect(component.length).toBe(0)
    });
  })
  
});
