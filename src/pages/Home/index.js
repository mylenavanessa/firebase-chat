import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from './store/dispatchers';
import './styles.scss';
import { Input, Button } from 'reactstrap'

class Home extends Component {

  state = {
    value: ''
  }
  
  static routerOptions = {
    path: '/',
    exact: true
  }

  login = () => {
    this.props.dispatchCreateUser(this.state.value)
    this.props.history.push('/chat')
  }

  render() {
    const { value } = this.state
    return (
      <div id="Home">
        <Input placeholder='User' onChange={(e) => this.setState({value : e.target.value})} value={value}/>
        <Button onClick={this.login}>Entrar</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {...Actions};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
