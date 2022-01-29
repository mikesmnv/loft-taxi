import React from 'react';
import LoginForm from '../components/LoginForm';
import {Logo} from 'loft-taxi-mui-theme';

const Login = (props) => {
    return (
            <div className="login-page">
                <div className='login-page__menu'>
                    <Logo />
                </div>
                <LoginForm navigate={props.navigate} {...props}/>
            </div>
    )
    }
    
export default Login;
