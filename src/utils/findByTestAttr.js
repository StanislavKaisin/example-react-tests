const findByTestAttr=(component, attr)=>{
  const result=component.find(`[data-test='${attr}']`)
  return result;
}

export default findByTestAttr;