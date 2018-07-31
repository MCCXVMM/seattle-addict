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
      <div id='NavBar'>
        <div className='Button'>
            <p> About </p>
        </div>
        <div className='Button'>
            <p>Map</p>
        </div>
        <div className='Button'>
            <p>Calendar</p>
        </div>
        <div className='Button'>
            <p>Sign Up</p>
        </div>
      </div>
    );
  }
}

export default Nav;
