import moxios from "moxios";
import { testStore } from "../utils/index";
import { fetchPosts } from "../redux/actions/index";

describe("fetch posts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("store is updated correctly", () => {
    const expectedState = [
      { title: "test title 1", body: "test description 1" },
      { title: "test title 2", body: "test description 2" },
      { title: "test title 3", body: "test description 3" },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
        // response: []
      })
    }
    )
    return store.dispatch(fetchPosts())
    .then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    })
  });
  
});
