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
        <NavBar />
        <table>
          <tbody>
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
