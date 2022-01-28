import React from 'react';
import HeaderWithAuth from '../components/Header';
//import PropTypes from 'prop-types';

class Profile extends React.Component {

    // static propTypes = {
    //     navigate: PropTypes.func.isRequired
    //   }

      render() { 
        return (
        <div className='profile'>
          <HeaderWithAuth {...this.props} />
          <div className="profile-card">Страница профиля</div>
        </div>
        );
    }
}

export default Profile;
