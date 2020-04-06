import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

import findByTestAttr from '../../utils/findByTestAttr'

const setUp= (props={})=>{
  const component = shallow(<Header {...props}/>);
  console.log("component=", component);
  return component;
}

// const findByTestAttr=(component, attr)=>{
//   const result=component.find(`[data-test='${attr}']`)
//   return result;
// }

describe("header component", () => {

  let component;
  beforeEach(()=>{
    component = setUp();
  })

  it("it should render without errors", () => {
    // console.log(component.debug())
    // const wrapper = component.find('.headerComponent')
    // const wrapper = component.find(`[data-test='headerComponent']`)
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1);
  });
  it("should render a logo", () => {
    // console.log(component.debug())
    // const logo = component.find('.logoIMG')
    // const logo = component.find(`[data-test='logoIMG']`)
    const logo = findByTestAttr(component, 'logoIMG')
  
    expect(logo.length).toBe(1);
  });
});
// ()=>{}
