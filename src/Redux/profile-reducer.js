import actionType from "./action-types";

const initialState = {
  posts: [
    { id: 1, post: "Hi, how are you?", likes: 12 },
    { id: 2, post: "My second post!", likes: 10 },
    { id: 3, post: "Klark Kent is superman!!!", likes: 11 },
  ],
  newPostText: "",
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_POST:
      const newPost = {
        id: 5,
        post: state.newPostText,
        likes: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case actionType.UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

// ACTION CREATORS
export function addPostActionCreator() {
  return {
    type: actionType.ADD_POST,
  };
}

export function updateNewPostActionCreator(text) {
  return {
    type: actionType.UPDATE_NEW_POST_TEXT,
    newText: text,
  };
}

export default profileReducer;
