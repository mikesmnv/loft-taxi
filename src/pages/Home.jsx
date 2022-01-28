import React from 'react';
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
            </div>
        );
        }
    }

export default Home;