import React from 'react';
import HeaderWithAuth from '../components/Header';
import Map from '../components/Map';
import RoadRoute from '../components/RoadRoute';
import { connect } from "react-redux";

class Home extends React.Component {
        
      render() {
        return (
                <div className='home'>
                    <HeaderWithAuth {...this.props}/>
                    <div className="homePage"><Map/></div>
                    <RoadRoute />
                </div> 
        );
        }
    }

const HomeWithAuth = connect(
(state) => ({isHavingCard: state.card.isHavingCard})
) (Home);
export default HomeWithAuth;