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
        <p className='Button'><a href='/about-us'>About Us</a></p>
        <p id='LinkBorder' className='Button'><a href='/map-of-events'>Map</a></p>
        <p className='Button'><a href='/signup-or-login'>Sign Up</a></p>
      </div>
    );
  }
}

export default Links;
