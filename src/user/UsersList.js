import React, { Component } from 'react';
import { addConnectedUser } from './usersActions';

export default class UsersList extends Component {
  componentDidMount() {
    firebase.database().ref('users').on('child_added', (snapshot) => {
      this.props.dispatch(
        addConnectedUser({
          uid: snapshot.key,
          userPayload: snapshot.val()
        })
      );
    });
  }

  render() {
    return (
      <div>Hey!</div>
    );
  }
}
