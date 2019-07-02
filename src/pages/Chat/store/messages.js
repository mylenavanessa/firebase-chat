import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  watchMessages: [],
  watchMessagesSuccess: ['messages','success'],
  watchMessagesError: ['error'],
  sendMessage: ['message'],
  sendMessageSuccess: ['success'],
  sendMessageError: ['error'],
},{ prefix: 'messages/'});

const INITIAL_STATE = {
  data: [],
  loading: false,
  success: null,
  error: null,
};

const watchMessages = (state = INITIAL_STATE, action) => {
  return {...state, loading: true }
}

const watchMessagesSuccess = (state = INITIAL_STATE, action) => {
  return{...state, data: action.messages, loading: false }
}

const watchMessagesError = (state = INITIAL_STATE, action) => {
  return {...state, loading: false, error: action.error }
}

const sendMessage = (state = INITIAL_STATE, action) => {
  return {...state, loading: true }
}

const sendMessageSuccess = (state = INITIAL_STATE, action) => {
  return {...state, loading: false, success: action.success }
}

const sendMessageError = (state = INITIAL_STATE, action) => {
  return {...state, loading: false, error: action.error }
}


export default createReducer(INITIAL_STATE,{
  [Types.WATCH_MESSAGES]: watchMessages,
  [Types.WATCH_MESSAGES_SUCCESS]: watchMessagesSuccess,
  [Types.WATCH_MESSAGES_ERROR]: watchMessagesError,
  [Types.SEND_MESSAGE]: sendMessage,
  [Types.SEND_MESSAGE_SUCCESS]: sendMessageSuccess,
  [Types.SEND_MESSAGE_ERROR]: sendMessageError,
});
