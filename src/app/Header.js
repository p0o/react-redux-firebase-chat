import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../auth/authActions';
import SignInButton from '../auth/SignInButton';

export class Header extends Component {
  render() {
    const { onSignInClick } = this.props;
    return (
      <div>
        <SignInButton onSignInClick={ onSignInClick } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    users: state.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSignInClick: authActions.signIn
  }
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
