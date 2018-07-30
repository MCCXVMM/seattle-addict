import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import UserProfile from './UserProfile';
import Logo from './Logo'
import axios from 'axios';

import Background from './PPM.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  liftTokenToState(data) {
    this.setState({token: data.token, user: data.user})
  }

  logout() {
    localStorage.removeItem('mernToken')
    this.setState({token: '', user: {}})
  }

  componentDidMount() {
    // If there is a token in localStorage
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: {}
      })
    } else {
      //   Validate the token against the server
      axios.post('/auth/me/from/token', {
        token: token
      }).then(response => {
        //   Store the token and user
        localStorage.setItem('mernToken', response.data.token)
        this.setState({
          token: response.data.token,
          user: response.data.user
        })
        //   Pass User into child components and display main app
      }).catch(err => {
        // Both the JWT and db errors will be caught here
        console.log(err)
      })
    }
  }

  render() {
    var theUser = this.state.user
    if (typeof this.state.user === 'object' && Object.keys(this.state.user).length !== 0) {
      return (
        <Router>
          <Route className='app' exact path="/"
              render={(props) => <UserProfile user={this.state.user} logout={this.logout}/>}
            />
        </Router>
      );
    } else {
      return (
        <div>
          <table>
            <tr>
              <td>
                <Logo />
              </td>
              <td>
                <div className='NavBar'>
                  <div className='About'>
                      <p> About </p>
                  </div>
                  <div className='Map'>
                      <p>Map</p>
                  </div>
                  <div className='Calendar'>
                      <p>Calendar</p>
                  </div>
                  <div className='Signup'>
                      <p>Sign Up</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan='2'>
                <img className='Background' src={Background} alt='Background' />
              </td>
            </tr>
          </table>

          {/* <div className='TopBar'>
            <Logo />
            <div className='AccountButtons'>
              <div className='SignupBox'>
                <Signup lift={this.liftTokenToState} />
              </div>
              <div className='LoginBox'>
                <Login lift={this.liftTokenToState} />
              </div>
            </div>
          </div>

          <div>
            <img className='Background' src={Background} alt='Background' />
          </div> */}
        </div>
      );
    }
  }
}

export default App;
