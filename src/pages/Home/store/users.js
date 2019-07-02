import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  createUser: ['name'],
},{ prefix: 'users/'});

const INITIAL_STATE = {
  user: null
};

const createUser = (state = INITIAL_STATE, action) => {
  return {...state, user: action.name }
}

export default createReducer(INITIAL_STATE,{
  [Types.CREATE_USER]: createUser,
});
