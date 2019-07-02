import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from './store/dispatchers';
import './styles.scss';
import { Input, Button, Alert } from 'reactstrap'
import startFirebase from '../../services/firebase'
import moment from 'moment'

class Chat extends Component {
  state = {
    message: ''
  }

  static routerOptions = {
    path: '/chat',
    exact: true
  }

  componentDidMount () {
    if(!this.props.user)
      return this.props.history.push('/')

    startFirebase()
    this.props.dispatchWatchMessages()
  }

  onSend = () => {
    const { message } = this.state
    const { user} = this.props
    this.props.dispatchSendMessage(message, user)
    this.setState({ message: ''})
  }

  render() {
    const { message } = this.state
    const { data } = this.props.messages
    
    return (
      <div id="Chat">
        <ul className='list-messages'>
          {
            data.map(item => 
              <li key={item.id}> 
                <Alert color='success'>{item.message} ------ {item.user} ------ {moment(item.date).format('DD/MM/YYYY H:m:s')}</Alert>
              </li>
            )
          }
        </ul>
        <div className='input-box'>
          <Input placeholder='Mensagem' onChange={(e) => this.setState({ message: e.target.value})} value={message}/>
          <Button onClick={this.onSend}>Enviar</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  user: state.users.user
});

const mapDispatchToProps = {...Actions};

export default connect(mapStateToProps,mapDispatchToProps)(Chat);
