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
          <table id='MapCalDes'>
            <tr>
              <td>
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1ZdjvcSz5tbyURWV4dx5YgBA1PeN0wmtl" width="800" height="680"></iframe>
              </td>
              <td>
                <table id='CalDes'>
                  <tr>
                    <td>
                      <iframe src="https://calendar.google.com/calendar/embed?src=lo1g5erva50mj5olpe940f1rgs%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="400" height="400"></iframe>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h1> Sweet Alchemy </h1>
                      <h2> Price Range: $5-$20 </h2>
                      <p> A great and accesible location for all-natural ice cream and candy. Well trained and supportive staff </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>

    );
  }
}




export default MapOfEvents;
