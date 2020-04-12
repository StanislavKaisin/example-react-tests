import { applyMiddleware, createStore } from "redux";
import rootReducer from "./../redux/reducers/index";
import { middlewares } from "./../redux/createStore";

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
