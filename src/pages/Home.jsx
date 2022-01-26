import React from 'react';
<<<<<<< Updated upstream
import Header from '../components/Header';


class Home extends React.Component {

      render() {
        return (
            <div>
                <Header navigate={this.props.navigate}/>
                <div className="homePage">Map</div>
=======
import HeaderWithAuth from '../components/Header';
import PropTypes from 'prop-types';
import Map from '../components/Map';

class Home extends React.Component {

    // static propTypes = {
    //     navigate: PropTypes.func.isRequired
    //   }
      
      render() {
        return (
            <div className='home'>
                <HeaderWithAuth {...this.props}/>
                <div className="homePage"><Map/></div>
>>>>>>> Stashed changes
            </div>
        );
        }
    }

export default Home;