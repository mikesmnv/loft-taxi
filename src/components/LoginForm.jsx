import React from 'react';
<<<<<<< Updated upstream
=======
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { authenticate } from "../actions";
import { Navigate, Link } from "react-router-dom";
>>>>>>> Stashed changes

class LoginForm extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault();
<<<<<<< Updated upstream
        this.setState({
            email: event.target.email.value,
            password: event.target.password.value
        });
        this.props.navigate("home");
      };
=======
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        this.props.authenticate(email, password);
        
        // this.props.navigate("home");
        };
>>>>>>> Stashed changes

      render() {
        return (
            <form title='Авторизация' onSubmit={this.handleSubmit}>
                <label htmlFor="email">Логин</label>
                <input id="email" type="email" name="email" size="28" />
                <label htmlFor="password">Пароль</label>
<<<<<<< Updated upstream
                <input id="password" type="password" name="password" size="28" />
                <button type="submit" className="input-button">Войти</button>
=======
                <input id="password" type="password" name="password" size="28" defaultValue="12345"/>
                <button type="submit" className="form__button">Войти</button>
                <div className='form__footer'>
                    <span>Новый пользователь?</span>
                    {/*<span className='form__ref-button' onClick={() => this.props.navigate("registration")}>Зарегистрируйтесь</span> */}
                    <span className='form__ref-button'> <Link to="/registration"> Зарегистрируйтесь </Link> </span>
                </div>
>>>>>>> Stashed changes
            </form>
        );
        }
    }

    const LoginFormWithAuth = connect(
        (state) => ({isLoggedIn: state.auth.isLoggedIn}),
        { authenticate }
    ) (LoginForm)
    
    export default LoginFormWithAuth;