import React, { Component } from 'react';
import logo from './Logo.1.png';
import logohover from './Logo.1-hover.png';

class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img id='LogoHover' src={logohover} alt ='broken' />
        <a href='/'><img id='Logo' src={logo} alt ='broken' /></a>
      </div>
    );
  }
}

export default Logo;
