const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hi, how are you?", likes: 12 },
        { id: 2, post: "My second post!", likes: 10 },
        { id: 3, post: "Klark Kent is superman!!!", likes: 11 },
      ],
      newPostText: "react",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Victoria" },
        { id: 2, name: "Vitaliy" },
        { id: 3, name: "Valentyn" },
        { id: 4, name: "Victor" },
      ],
      messages: [
        { id: 1, message: "How is it going?" },
        { id: 2, message: "Yo" },
        { id: 3, message: "Suppar!" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likes: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export function addPostActionCreator() {
  return {
    type: ADD_POST,
  };
}

export function updateNewPostActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
}

export default store;
window.state = store;
