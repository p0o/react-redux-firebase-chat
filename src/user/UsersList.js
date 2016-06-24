import React, { Component } from 'react';

export default class UsersList extends Component {
  componentDidMount() {
    firebase.database().ref('users').on('child_added', (snapshot) => {

    });
  }

  render() {
    return (
      <div>Hey!</div>
    );
  }
}
