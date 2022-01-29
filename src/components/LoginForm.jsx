import React from 'react';
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate, logOut } from "../actions.js";

class LoginForm extends React.Component {

    state = {
        email: "",
        password: ""
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        this.props.authenticate(email, password);
        };
    
    componentDidMount() {
            this.props.logOut();
        }

    render() {
            const { isLoggedIn } = this.props;    
            return ( isLoggedIn ? (<Navigate to="/home" />) : (
                <form title='Авторизация' onSubmit={this.handleSubmit} className='login-form'>
                    <div className='form__tittle'>Войти</div>
                    <label htmlFor="email">Логин</label>
                    <input id="email" type="email" name="email" size="28" defaultValue="test@test.com"/>
                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password" name="password" size="28" defaultValue="123123"/>
                    <button type="submit" className="form__button">Войти</button>
                    <div className='form__footer'>
                        <span>Новый пользователь?</span>
                        {/*<span className='form__ref-button' onClick={() => this.props.navigate("registration")}>Зарегистрируйтесь</span> */}
                        <span className='form__ref-button'> <Link to="/registration"> Зарегистрируйтесь </Link> </span>
                    </div>
                </form> )
        )
        }
    }

    const LoginFormWithAuth = connect(
        (state) => ({isLoggedIn: state.auth.isLoggedIn}),
        { authenticate, logOut }
    ) (LoginForm)
    
    export default LoginFormWithAuth;