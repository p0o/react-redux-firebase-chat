import React, { Component } from 'react';

export default class MessageList extends Component {
  componentDidMount() {
    this._firebaseRef = firebase.database().ref('messages');
    this._firebaseRef.on('child_added', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <ul>

      </ul>
    );
  }

  componentWillUnmount() {
    this._firebaseRef.off();
  }
}
