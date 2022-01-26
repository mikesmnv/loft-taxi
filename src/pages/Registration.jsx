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

<<<<<<< Updated upstream
=======
// Registration.propTypes = {
//     navigate: PropTypes.func.isRequired
// }

>>>>>>> Stashed changes
export default Registration ;