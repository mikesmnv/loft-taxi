import React from 'react';
import LoginForm from '../components/LoginForm';
<<<<<<< Updated upstream
=======
//import PropTypes from 'prop-types';
import {Logo} from 'loft-taxi-mui-theme';
>>>>>>> Stashed changes

const Login = (props) => {
    return (
            <div className="Login-page">
                <LoginForm navigate={props.navigate} />
                <button className="registration-button" onClick={() => props.navigate("registration")}>Регистрация</button>
            </div>
    )

<<<<<<< Updated upstream
}
=======
// Login.propTypes = {
//     navigate: PropTypes.func.isRequired
// }
>>>>>>> Stashed changes

export default Login;
