import React, { Component } from 'react';
import NavBar from './NavBar';
import Background from './PPM.jpg';

class Homepage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='Homepage'>
        <table>
          <tbody>
            <tr>
              <td>
                <NavBar />
              </td>
            </tr>
            <tr>
              <td>
                <img className='Background' src={Background} alt='Background' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Homepage;
