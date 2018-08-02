import React, { Component } from 'react';
import skyline from './Skyline.png';

class Skyline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: '',
      temperature: '',
      time: ''
    };
  }

  render() {
    return (
      <div>
        <img id='Skyline' src={skyline} alt ='broken' />
      </div>
    );
  }
}

export default Skyline;
