import React, { Component } from 'react';
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login';

class SignupOrLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: {}
    };
    this.liftTokenToState = this.liftTokenToState.bind(this)
  }

  liftTokenToState(data) {
    this.props.loginUser(data)
    this.setState({token: data.token, user: data.user})
  }

  render() {
    return (
      <div className='AccountBoxes'>
        <NavBar />
        <div className='SignupBox'>
          <Signup lift={this.liftTokenToState} />
        </div>
        <div className='LoginBox'>
          <Login lift={this.liftTokenToState} />
        </div>
      </div>
    );
  }
}

export default SignupOrLogin;
