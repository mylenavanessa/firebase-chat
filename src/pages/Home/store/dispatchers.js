import { Creators } from './users';

export function dispatchCreateUser(user){
  return dispatch => dispatch(Creators.createUser(user))
}

