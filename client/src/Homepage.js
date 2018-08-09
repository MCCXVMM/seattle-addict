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

        <table id='Homepage'>
          <tbody>
            <tr>
              <td colSpan='4'>
                <div id='SearchBarContainer'>
                  <img className='Background' src={Background} alt='Background' />
                  <form id='SearchBar'>
                    <input id='SearchBarStyle' type="text" name="search" placeholder="Search Seattle Addict" />
                  </form>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan='4'>
                <h1>Explore Seattle</h1>
              </td>
            </tr>
            <tr>
              <td>
                <button class='button button1'>Events</button>
              </td>
              <td>
                <button class='button button2'>Community Centers</button>
              </td>
              <td>
                <button class='button button3'>Food</button>
              </td>
              <td>
                <button class='button button4'>Stores</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Homepage;
