import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';

class MapOfEvents extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <table className='Description'>
            <tr>
              <th> Sweet Alchemy </th>
            </tr>
            <tr>
              <th> Price Range: $5-$20 </th>
            </tr>
            <tr>
              <td colSpan="1"> A great and accesible location for all natural ice cream and candy. Well trained and supportive staff </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}




export default MapOfEvents;
