import React from 'react';

class LoginForm extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: event.target.email.value,
            password: event.target.password.value
        });
        this.props.navigate("home");
      };

      render() {
        return (
            <form title='Авторизация' onSubmit={this.handleSubmit}>
                <label htmlFor="email">Логин</label>
                <input id="email" type="email" name="email" size="28" />
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" name="password" size="28" />
                <button type="submit" className="input-button">Войти</button>
            </form>
        );
        }
    }

    export default LoginForm;