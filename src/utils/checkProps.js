import checkPropTypes from "check-prop-types";

const checkProps = (component, expectedProps)=> {
  // console.log('component', component);
  // console.log('expectedProps', expectedProps);
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsError;
}

export default checkProps;