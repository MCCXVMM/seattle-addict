import React, { Component } from 'react';
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login';
import LoginBackground from './LoginBackground.png';
import SignupBackground from './SignupBackground.png';
import SignupText from './SignupText';
import LoginText from './LoginText';

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
      <div>
        <NavBar />

        <div>
          <table id='SignupOrLogin'>
            <tr>
              <td id='LoginBorder' className='AccountBoxes'>
                <img id='Login' src={LoginBackground} alt='Login Background'/>
                <div id='LoginBox'>
                  <LoginText />
                  <Login lift={this.liftTokenToState} />
                </div>
              </td>
              <td className='AccountBoxes'>
                <img id='Signup' src={SignupBackground} alt='Signup Background'/>
                <div id='SignupBox'>
                  <SignupText />
                  <Signup lift={this.liftTokenToState} />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default SignupOrLogin;
