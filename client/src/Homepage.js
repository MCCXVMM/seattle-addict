import React, { Component } from 'react';
import NavBar from './NavBar';
import Background from './PPM.jpg';

class Homepage extends Component {
  constructor(props) {
    super(props)
      // TODO: I DON'T KNOW WHAT TO DO HERE
  }

  render() {
    return (
      <div>
        <NavBar />

<<<<<<< HEAD
        <table>
          <tbody>
            <tr>
              <td>
=======
        <table id='Homepage'>
          <tbody>
            <tr>
              <td>
                {/* Kendra's Search Bar */}
>>>>>>> 470167a1061e023d3d2ac334f4e651038fac4adc
                <div id='SearchBarContainer'>
                  <img className='Background' src={Background} alt='Background' />
                  <form id='SearchBar'>
                    <input id='TEST' type="text" name="search" placeholder="Search Seattle Addict" />
                  </form>
                </div>
                <div>
                    <h1>Explore Seattle</h1>
                    <button class="button button1">Events</button>
                        <button class="button button2">Community Centers</button>
                        <button class="button button3">Food</button>
                        <button class="button button4">Stores</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Homepage;
