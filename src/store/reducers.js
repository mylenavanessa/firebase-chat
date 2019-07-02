import { combineReducers } from 'redux';
import users from '../pages/Home/store/users'
import messages from '../pages/Chat/store/messages'

const rootReducer = combineReducers({
  users,
  messages
});

export default rootReducer;
