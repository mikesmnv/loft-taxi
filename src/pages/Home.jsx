import React from 'react';
import Header from '../components/Header';


class Home extends React.Component {

      render() {
        return (
            <div>
                <Header navigate={this.props.navigate}/>
                <div className="homePage">Map</div>
            </div>
        );
        }
    }

export default Home;