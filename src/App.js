import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config'
import Signup from'./pages/Signup';
import Profile from './pages/Profile'
import UserProvider, {UserProvided} from './firebase/userProvider'
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom'
import Login from './pages/Login';
import ProfileRedirect from './router/ProfileRedirect';
import PrivateRoute from './router/PrivateRoute';
function App() {
  return (
    <UserProvider>
    <Router>
    <div>
      <Header></Header>
      <div className="app">
        <div className="ui grid container">
          <Switch>
            <ProfileRedirect exact path="/signup" component={Signup} />
            <ProfileRedirect exact path="/login" component={Login} />
            <PrivateRoute  exact path="/profile/:id" component={Profile}/>
            <Route exact path="/">
              <Redirect to="/login"/>
              </Route> 
          </Switch>
        </div>
      </div>
    </div>
    </Router>
    </UserProvider>
  );
}

export default App;
