import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import './App.css';
import { Routes, Route } from "react-router-dom";
import  { PrivateRoute } from "./PrivateRoute.jsx";
import { connect } from "react-redux";

class App extends React.Component {

  render() {
    return (
      <main className='main'>
          <section className='main-page'>
              <Routes>
                <Route exact path="" element={<Login {...this.props}/>}/>
                <Route exact path="login" element={<Login {...this.props}/>}/>
                <Route path="profile" element={<PrivateRoute><Profile {...this.props}/></PrivateRoute>}/>
                <Route path="home" element={<PrivateRoute><Home {...this.props}/></PrivateRoute>}/>
                <Route exact path="registration" element={<Registration {...this.props}/>}/>
              </Routes>
          </section>
      </main>
    )
  }
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);

