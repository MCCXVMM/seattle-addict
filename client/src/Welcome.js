import React, { Component } from 'react';
import logo from './Logo.1.png'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: 'Welcome to Seattle Addict!'
    };
  }

  render() {
    return (
      <div className='WelcomeBar'>
        <img className='Logo' src={logo} alt ='broken' />
        <p className='Greeting'>{this.state.greeting}</p>
      </div>
    );
  }
}

export default Welcome;
