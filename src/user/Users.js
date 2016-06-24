import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';

export class Users extends Component {
  render() {
    return (
      <UsersList />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

export default connect(
  mapStateToProps
)(Users);
