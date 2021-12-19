import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = (props) => {
    return (
            <div className="Login-page">
                <LoginForm navigate={props.navigate} />
                <button className="registration-button" onClick={() => props.navigate("registration")}>Регистрация</button>
            </div>
    )

}

export default Login;
