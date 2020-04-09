import { types } from "../../actions/types";
import postReducer from "./reducer";

describe("posts reducer", () => {
  it("should return default state", () => {
    const newState = postReducer(undefined, {});
    // console.log('newState=', newState)
    expect(newState).toEqual([])
  });

  it("should return new state if receiving type", () => {
    const posts = [{title:'test 1'}, {title:'test 2'}, {title:'test 3'}];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    // console.log('newState.length=', newState.length)
    expect(newState.length).toBe(3)
  });

  it("should return new state if receiving type", () => {
    const posts = [{title:'test 1'}, {title:'test 2'}, {title:'test 3'}];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts)
  });
});
