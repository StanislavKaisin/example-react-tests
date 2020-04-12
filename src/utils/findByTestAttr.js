const findByTestAttr=(component, attr)=>{
  const result=component.find(`[data-test='${attr}']`)
  // console.log('result=', result)
  return result;
}

export default findByTestAttr;