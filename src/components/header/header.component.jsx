import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";

import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className="header">
    <div className="options">
      <Link className="option" to='/'>
        HOME
      </Link>
      <Link className="option" to='/todolist'>
        TODO LIST
      </Link>
      {
        currentUser ? (
        <div className="option" onClick={() => auth.signOut()}> 
          SIGN OUT
        </div>
        ):( 
        <Link className="option" to='/login'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);