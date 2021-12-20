import React from 'react';

class RegistrationForm extends React.Component {

    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: event.target.email.value,
            password: event.target.password.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value
        });
        this.props.navigate("home");
      };

      render() {
        return (
            <form title='Регистрация' onSubmit={this.handleSubmit}>
                <label htmlFor="email">Адрес электронной почты</label>
                <input id="email" type="email" name="email" size="28" />
                <label htmlFor="fName">Имя</label>
                <input id="fName" type="text" name="firstName" size="14" />
                <label htmlFor="lName">Фамилия</label>
                <input id="lName" type="text" name="lastName" size="14" />
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" name="password" size="28" />
                <button type="submit" className="input-button">Зарегистрироваться</button>
            </form>
        );
        }
    }

    export default RegistrationForm;