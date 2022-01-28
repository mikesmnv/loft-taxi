import React from 'react';
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../actions.js";

class LoginForm extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        this.props.authenticate(email, password);
        return (<Navigate to="/home" />);
        // this.props.navigate("home");
        };

      render() {
        return (
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
            </form>
        );
        }
    }

    const LoginFormWithAuth = connect(
        (state) => ({isLoggedIn: state.auth.isLoggedIn}),
        { authenticate }
    ) (LoginForm)
    
    export default LoginFormWithAuth;