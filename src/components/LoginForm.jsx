import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

    static propTypes = {
        navigate: PropTypes.func
    }

    handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        this.props.logIn(email, password);
        this.props.navigate("home");
        };

      render() {
        return (
            <form title='Авторизация' onSubmit={this.handleSubmit} className='login-form'>
                <div className='form__tittle'>Войти</div>
                <label htmlFor="email">Логин</label>
                <input id="email" type="email" name="email" size="28" defaultValue="mike@mail.ru"/>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" name="password" size="28" defaultValue="12345"/>
                <button type="submit" className="form__button">Войти</button>
                <div className='form__footer'>
                    <span>Новый пользователь?</span>
                    <span className='form__ref-button' onClick={() => this.props.navigate("registration")}>Зарегистрируйтесь</span>
                </div>
            </form>
        );
        }
    }

    export default LoginForm;