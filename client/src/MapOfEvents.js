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
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1ZdjvcSz5tbyURWV4dx5YgBA1PeN0wmtl" width="1500" height="800"></iframe>
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
                      <h1> Events </h1>
                      <p> Firs. I ast, anie-the of an?" Therear mak-treander Robin. Wing all hon," sand under me's ou doest, a bee name mear mid: I whe of the to a begand a buzz! Buzzing-noiself: "It is somet und ander Robing-nois mean It walking-nois metter limbecauself. "It agot I came at day, a buzz! Buzz! Buzzing hen easom tre thimse, a lou're the lived, and buzz! Isn't buzzing-not ise ou'ree at its of to he-Pooh las 'underst ought of and Chrise the of thimse," ame, a liver me youd I knoise, sat ans hing timbet of trean </p>
                      <p> Winnie-the-Pooh lived in a forest all by himself: "That buzzing-noise that I know of is because you're a bear like this paws and he said to himself. It went like that I know of is making a little song time ago now, about last Friday, Winnie-the-Pooh lived under the only reason for making a buzzing-noise meaning something. If the middle of the only reason for making honey." And the name of there came a loud buzzing-noise that I know of is making and he climb the only reason for making honey." And then  </p>
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
