import React from 'react';
import LoginForm from '../components/LoginForm';
//import PropTypes from 'prop-types';
import {Logo} from 'loft-taxi-mui-theme';

const Login = (props) => {
    return (
            <div className="Login-page">
                <LoginForm navigate={props.navigate} />
                <button className="registration-button" onClick={() => props.navigate("registration")}>Регистрация</button>
            </div>
    )
    }
// Login.propTypes = {
//     navigate: PropTypes.func.isRequired
// }

export default Login;
