import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { Logo } from 'loft-taxi-mui-theme';

const Registration = (props) => {
    return (
            <div className="registration-page">
                <div className='login-page__menu'>
                    <Logo />
                </div>
                <RegistrationForm navigate={props.navigate} />
            </div>
    )

}

// Registration.propTypes = {
//     navigate: PropTypes.func.isRequired
// }

export default Registration ;