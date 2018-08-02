import React, { Component } from 'react';
import NavBar from './NavBar';

class MapOfEvents extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBar />
          <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1ZdjvcSz5tbyURWV4dx5YgBA1PeN0wmtl" width="800" height="680"></iframe>
      </div>

    );
  }
}

export default MapOfEvents;
