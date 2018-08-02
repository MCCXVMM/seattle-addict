/* ======== Imports for React ======== */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

/* ======== Imports for axios ======== */
import axios from 'axios';

/* ======== Imports for components ======== */
import Homepage from './Homepage';
import UserProfile from './UserProfile';
import SignupOrLogin from './SignupOrLogin';
import AboutUs from './AboutUs';
import MapOfEvents from './MapOfEvents';

<<<<<<< HEAD
import Background from './PPM.jpg'
import Skyline from './Skyline.png'
=======
/* ======== Import for CSS ======== */
import './App.css';
>>>>>>> 906eed8ed9a17fe4c27c058caeca74695a1bca42

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: {},
    }
    this.loginUser = this.loginUser.bind(this)
    this.logout = this.logout.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  loginUser(data) {
    this.setState({token: data.token, user: data.user})
  }

  logout() {
    localStorage.removeItem('mernToken')
    this.setState({token: '', user: {}})
    window.location='/'
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
    // var theUser = this.state.user
    // if (typeof this.state.user === 'object' && Object.keys(this.state.user).length !== 0) {
    //   return (
    //     <Router>
    //
    //     </Router>
    //   );
    // } else {
      return (
        <Router>
          <Switch>
            <Route className='' exact path='/' component={Homepage} />
            <Route className='' exact path='/user-profile/:id'
              render={(props) => <UserProfile user={this.state.user} logout={this.logout}/>}
            />
            <Route className='' exact path='/signup-or-login'
              render={(props) => <SignupOrLogin user={this.state.user} loginUser={this.loginUser} />}
            />
            <Route className='' exact path='/about-us' component={AboutUs} />
            <Route className='' exact path='/map-of-events' component={MapOfEvents} />
          </Switch>
        </Router>
      );
    }
  }

export default App;
