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

  /**
   * showUsersList(<OBJECT>)
   *
   * @param users - the users object with uid keys straight from state
   * @return Array - an array of users objects with uid inside the objects to be used easily in JSX
     */
  showUsersList(users) {
    if(!users) {
      return [];
    }

    return Object.keys(users).reduce(
      (list, uid) => {
      return [
        ...list,
        {
          uid,
          ...users[uid]
        }
      ];
    }, []);
  }

  render() {
    const { users } = this.props;

    return (
      <ul>
        { this.showUsersList(users).map(user => <li>{ user.displayName }</li>) }
      </ul>
    );
  }
}
