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
        </div>
      </div>
    );
  }
}

export default Nav;
