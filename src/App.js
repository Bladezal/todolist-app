import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import LogInSignUpPage from './pages/login-signup/login-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import TodoListPage from './pages/todolist/todolist.component';
import WithLoading from './components/loading/loading.component';

const TodoListWithLoading = WithLoading(TodoListPage);

class App extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      this.setState({loading: false});  
    });
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {loading} = this.state;
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={this.props.currentUser ? <Navigate to="/todolist" replace /> : <LogInSignUpPage />} />
          <Route exact path="/todolist" element={this.props.currentUser ? <TodoListWithLoading isLoading={loading} {...this.props} /> : <LogInSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);