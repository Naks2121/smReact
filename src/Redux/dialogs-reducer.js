import actionType from "./action-types";

const initialState = {
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
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case actionType.SEND_MESSAGE:
      const body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
}

// ACTION CREATORS
export function sendMessageCreator() {
  return {
    type: actionType.SEND_MESSAGE,
  };
}

export function updateNewMessageBodyCreator(body) {
  return {
    type: actionType.UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
}

export default dialogsReducer;
