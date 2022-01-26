import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import './App.css';
<<<<<<< Updated upstream

=======
import {connect} from "react-redux";
import { Routes, Route} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
>>>>>>> Stashed changes
class App extends React.Component {

  // state = { currentPage: "login" };

<<<<<<< Updated upstream
  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <main>
          <section>
            {this.state.currentPage === "login" && <Login navigate={ this.navigateTo }/>}
            {this.state.currentPage === "profile" && <Profile />}
=======
  // navigateTo = (page) => {
  //   if (this.props.isLoggedIn || page === 'registration')
  //   {
  //     this.setState({ currentPage: page });
  //   } else {
  //     this.setState({currentPage: "login"})
  //   }
  // };

  render() {
    return (
      <main className='main'>
          <section className='main-page'>
            {/* {this.state.currentPage === "login" && <Login navigate={ this.navigateTo }/>}
            {this.state.currentPage === "profile" && <Profile navigate={ this.navigateTo }/>}
>>>>>>> Stashed changes
            {this.state.currentPage === "home" && <Home navigate={ this.navigateTo }/>}
            {this.state.currentPage === "registration" && <Registration navigate={ this.navigateTo }/>} */}
              <Routes>
                <Route exact path="/" element={<Login {...this.props}/>}/>
                <Route exact path="login" element={<Login {...this.props}/>}/>
                <PrivateRoute path="profile" element={<Profile {...this.props}/>}/>
                <PrivateRoute path="home" element={<Home {...this.props}/>}/>
                <Route exact path="registration" element={<Registration {...this.props}/>}/>
              </Routes>
          </section>
      </main>
    )
  }
}

<<<<<<< Updated upstream
export default App;
=======
export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
>>>>>>> Stashed changes
