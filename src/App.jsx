import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import './App.css';

class App extends React.Component {

  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <main>
          <section>
            {this.state.currentPage === "login" && <Login navigate={ this.navigateTo }/>}
            {this.state.currentPage === "profile" && <Profile />}
            {this.state.currentPage === "home" && <Home navigate={ this.navigateTo }/>}
            {this.state.currentPage === "registration" && <Registration navigate={ this.navigateTo }/>}
          </section>
      </main>
    )
  }
}

export default App;
