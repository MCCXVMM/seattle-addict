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
<<<<<<< HEAD
        <div className='ButtonBorder'>
            <p> About </p>
        </div>
        <div className='ButtonBorder'>
            <p>Map</p>
        </div>
        <div className='ButtonBorder'>
=======
        <div className='Button'>
            <p> About </p>
        </div>
        <div className='Button'>
            <p>Map</p>
        </div>
        <div className='Button'>
>>>>>>> bc309fdcb09f7614bca413c30a6c3ccddeedb000
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
