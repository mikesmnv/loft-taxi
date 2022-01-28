import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const Registration = (props) => {
    return (
            <div className="Registration-page">
                <RegistrationForm navigate={props.navigate} />
                <h3>Registration</h3>
            </div>
    )

}

// Registration.propTypes = {
//     navigate: PropTypes.func.isRequired
// }

export default Registration ;