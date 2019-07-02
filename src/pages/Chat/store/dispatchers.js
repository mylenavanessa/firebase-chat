import { Creators } from './messages';
import firebase from 'firebase'
import moment from 'moment'

export function dispatchWatchMessages(){
  return async dispatch => {
    dispatch(Creators.watchMessages())
    try{
      firebase.database().ref('/messages').on('value', snapshot => {
        let messages = Object.keys(snapshot.val()).map(item => ({ id: item, ...snapshot.val()[item] }))
        messages = messages.sort((a,b) => moment(b.date) - moment(a.date))
        dispatch(Creators.watchMessagesSuccess(messages))
      })
    }catch(err){
      dispatch(Creators.watchMessagesError(err))
    }
  }
}

export function dispatchSendMessage(message, user){
  return async dispatch => {
    dispatch(Creators.sendMessage())
    try{
      const db = firebase.database().ref('/messages')
      await db.push({message, user, date: moment().toString()})
      dispatch(Creators.sendMessageSuccess())
    }catch(err){
      dispatch(Creators.sendMessageError(err))
    }
  }
}

