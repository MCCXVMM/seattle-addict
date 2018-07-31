import React, { Component } from 'react';
import logo from './Logo.1.png';

class Logo extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <img id='Logo' src={logo} alt ='broken' />
      </div>
    );
  }
}

export default Logo;
