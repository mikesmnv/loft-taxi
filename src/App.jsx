import React from 'react';
import Home from './pages/Home';
import LoginWithAuth from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import './App.css';
import {withAuth} from './components/AuthContext'

class App extends React.Component {

  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn || page === 'registration')
    {
      this.setState({ currentPage: page });
    } else {
      this.setState({currentPage: "login"})
    }
  };

  render() {
    return (
      <main className='main'>
          <section className='main-page'>
            {this.state.currentPage === "login" && <LoginWithAuth navigate={ this.navigateTo }/>}
            {this.state.currentPage === "profile" && <Profile/>}
            {this.state.currentPage === "home" && <Home navigate={ this.navigateTo }/>}
            {this.state.currentPage === "registration" && <Registration navigate={ this.navigateTo }/>}
          </section>
      </main>
    )
  }
}

export default withAuth(App);
