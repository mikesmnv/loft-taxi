import React from 'react';
import HeaderWithAuth from '../components/Header';
import Map from '../components/Map';
import RoadRoute from '../components/RoadRoute';
import { connect } from "react-redux";

class Home extends React.Component {
        
      render() {
        const isHavingCard = this.props.isHavingCard;
        console.log(isHavingCard);
        return ( isHavingCard ?  
                   <div className='home'>
                       <HeaderWithAuth {...this.props}/>
                       <div className="homePage"><Map/></div>
                       <RoadRoute />
                    </div> :
                    <div className='home'>
                        <HeaderWithAuth {...this.props}/>
                        <div className="homePage"><Map/></div>
                    </div>
        );
        }
    }

const HomeWithAuth = connect(
(state) => ({isHavingCard: state.card.isHavingCard})
) (Home);
export default HomeWithAuth;