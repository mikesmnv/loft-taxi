import React from 'react';
import HeaderWithAuth from '../components/Header';
import CardForm from '../components/CardForm';

class Profile extends React.Component {

      render() { 
        return (
        <div className='profile-page'>
          <HeaderWithAuth {...this.props} />
          <CardForm />
        </div>
        );
    }
}

export default Profile;