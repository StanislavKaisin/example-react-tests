import { types } from "./types";
import axios from "axios";

const request = `https://jsonplaceholder.typicode.com/posts?_limit=10`;

export const fetchPosts = () => async (dispatch) => {
  // console.log('object')
  await axios
    .get(request)
    .then((response) => {
      // console.log(response);
      return dispatch({
        type: types.GET_POSTS,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};
