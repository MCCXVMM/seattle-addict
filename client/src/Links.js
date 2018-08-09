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
        <div className='Button'>
          <a href='/about-us'><p>About Us</p></a>
        </div>
        <div className='Button'>
          <a href='/map-of-events'><p id='LinkBorder'>Map</p></a>
        </div>
        <div className='Button'>
          <a href='/signup-or-login'><p>Sign Up</p></a>
        </div>
      </div>
    );
  }
}

export default Links;
