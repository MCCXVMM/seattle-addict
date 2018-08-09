import React, { Component } from 'react';
import Logo from './Logo';
import Skyline from './Skyline';
import Links from './Links';

class NavBar extends Component {
  constructor(props) {
    super(props)
    // TODO: I DON'T KNOW WHAT TO DO HERE
  }

  render() {
    return (
      <div>
        <table id='NavBar'>
          <tbody>
            <tr>
              <td>
                <Logo />
              </td>
              <td id='NavBorder'>
                <Skyline />
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <iframe id='MusicPlayer' scrolling='no' frameborder='no' allow='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/300536103&color=%23421928&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
                    </td>
                  </tr>
                  <tr>
                    <td id='LinksBorder'>
                      <Links />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NavBar;
