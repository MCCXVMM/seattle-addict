import React, { Component } from 'react';
import Logo from './Logo';
import Skyline from './Skyline';
import Links from './Links';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='NavBar'>
        <table>
          <tbody>
            <tr>
              <td>
                <Logo />
              </td>
              <td id='NavBorder'>
                <Skyline />
              </td>
              <td>
                <Links />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NavBar;
