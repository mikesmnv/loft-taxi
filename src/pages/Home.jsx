import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import Map from '../components/Map';

class Home extends React.Component {

    static propTypes = {
        navigate: PropTypes.func.isRequired
      }
      
      render() {
        return (
            <div className='home'>
                <Header navigate={this.props.navigate}/>
                <div className="homePage"><Map/></div>
            </div>
        );
        }
    }

export default Home;