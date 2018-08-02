import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    };
  }

  render() {
    return (
      <div className='UserProfileBox'>
        <p>Hello, {this.props.user.name}!</p>
        <table>
          <tr>Here are your events</tr>
          <tr>
            <td>{this.props.user.name}</td>
            <td>{this.props.user.name}</td>
          </tr>
        </table>
        <button
          onClick={this.props.logout}>Log out</button>
      </div>
    );
  }
}

export default UserProfile;
