import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hi, how are you?", likes: 12 },
        { id: 2, post: "My second post!", likes: 10 },
        { id: 3, post: "Klark Kent is superman!!!", likes: 11 },
      ],
      newPostText: "",
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
      newMessageBody: "",
    },
    sidebarPage: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
