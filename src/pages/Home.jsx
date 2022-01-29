import React from 'react';
import HeaderWithAuth from '../components/Header';
import Map from '../components/Map';

class Home extends React.Component {
      
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