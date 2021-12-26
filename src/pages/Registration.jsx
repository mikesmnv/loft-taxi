import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import PropTypes from 'prop-types';

const Registration = (props) => {
    return (
            <div className="registration-page">
                <RegistrationForm {...props}/>
            </div>
    )

}

Registration.propTypes = {
    navigate: PropTypes.func.isRequired
}

export default Registration ;