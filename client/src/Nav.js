import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    };
  }

  render() {
    return (
<<<<<<< HEAD
      <div id='NavBar'>
        <div className='ButtonBorder'>
            <p> About </p>
        </div>
        <div className='ButtonBorder'>
            <p>Map</p>
        </div>
        <div className='ButtonBorder'>
            <p>Calendar</p>
        </div>
        <div className='Button'>
            <p>Sign Up</p>
=======
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
            <p>Sign Up  </p>
>>>>>>> 076f450df988a39b88e3d737d9f47d9addc81690
        </div>
      </div>
    );
  }
}

export default Nav;
