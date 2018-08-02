import React, { Component } from 'react';
import logo from './Logo.1.png'
import skyline from './Skyline.png'
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
        <img className='Skyline' src={skyline} alt ='broken' />
      </div>
    );
  }
}

export default Welcome;
