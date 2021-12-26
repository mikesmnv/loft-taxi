import React from 'react';
import PropTypes from 'prop-types';

class RegistrationForm extends React.Component {

    static propTypes = {
        navigate: PropTypes.func
    }
    
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
            <form title='Регистрация' className='registration-form' onSubmit={this.handleSubmit}>
                <div className='form__tittle'>Войти</div>
                <label htmlFor="email">Адрес электронной почты</label>
                <input id="email" type="email" name="email" size="28" />
                <label htmlFor="fName">Имя</label>
                <input id="fName" type="text" name="firstName" size="14" />
                <label htmlFor="lName">Фамилия</label>
                <input id="lName" type="text" name="lastName" size="14" />
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" name="password" size="28" />
                <button type="submit" className="form__button">Зарегистрироваться</button>
                <div className='form__footer'>
                    <span>Уже зарегистрировался?</span>
                    <span className='form__ref-button' onClick={() => this.props.navigate("login")}>Войти</span>
                </div>
            </form>
        );
        }
    }

    export default RegistrationForm;