export const initialState = {
  sendingInProgress: false,
  newMessage: "",
  messages: [],
};

export function conversationReducer(state, action) {
  switch (action.type) {
    case "SENDING_IN_PROGRESS":
      return { ...state, sendingInProgress: true };
    case "MESSAGE_SENT":
      return {
        ...state,
        sendingInProgress: false,
        messages: [...state.messages, action.payload],
      };
    case "SET_MESSAGES":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
}
