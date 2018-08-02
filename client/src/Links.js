import React, { Component } from 'react';

class Links extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    };
  }

  render() {
    return (
      <div id='Links'>
        <div className='ButtonBorder'>
            <p><a href='/about-us'>About Us</a></p>
        </div>
        <div className='ButtonBorder'>
            <p><a href='/map-of-events'>Map</a></p>
        </div>
        <div className='Button'>
            <p><a href='/signup-or-login'>Sign Up</a></p>
        </div>
      </div>
    );
  }
}

export default Links;
