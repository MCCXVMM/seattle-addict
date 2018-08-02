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
<<<<<<< HEAD
      <div id='Skyline'>
=======
      <div>
>>>>>>> 906eed8ed9a17fe4c27c058caeca74695a1bca42
        <img id='Skyline' src={skyline} alt ='broken' />
      </div>
    );
  }
}

export default Skyline;
