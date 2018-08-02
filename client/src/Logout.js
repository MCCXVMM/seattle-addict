import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem('mernToken')
    this.props.logout()
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Log out</button>
    );
  }
}

export default Logout;
