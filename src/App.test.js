import React from "react";
import App from "./App";
import { shallow } from "enzyme";

import findByTestAttr from "./utils/findByTestAttr";
import checkProps from "./utils/checkProps.js";
import { testStore } from "./utils/index";

const setUp = (initialState = {}) => {
  // console.log(initialState)
  const store = testStore(initialState);
  // console.log(store)
  // for components connected to redux store 
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  // console.log(wrapper.debug())
  // console.log(wrapper)
  return wrapper;
};

describe("app component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "test title 1",
          description: "test description 1",
        },
        {
          title: "test title 2",
          description: "test description 2",
        },
        {
          title: "test title 3",
          description: "test description 3",
        },
      ],
    };
    wrapper = setUp(initialState);
  });
  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    // console.log('component=', component)
    // console.log(wrapper)
    // console.log(component.length);
    expect(component.length).toBe(1);
  });
  it("exampleMethod_updateState should update state as expected", () => {
    const classInstance=wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState=classInstance.state.hideBtn
    expect(newState).toBe(true);
  });
  it("exampleMethod_returnAValue should return a value as expected", () => {
    const classInstance=wrapper.instance();
    const newValue=classInstance.exampleMethod_returnAValue(6)
    expect(newValue).toBe(7);
  });


});
