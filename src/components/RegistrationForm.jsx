import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registration } from "../actions.js";

class RegistrationForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        this.props.registration(email, password, firstName, lastName);
      };

      render() {
            const isRegistrated = this.props.isRegistrated;
            console.log(isRegistrated);
            return ( isRegistrated ? <span className='form__reg-button'> <Link to="/login"> Войти </Link> </span> :
                <form title='Регистрация' className='registration-form' onSubmit={this.handleSubmit}>
                    <div className='form__tittle'>Регистрация</div>
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
                        {/*<span className='form__ref-button' onClick={() => this.props.navigate("login")}>Войти</span>*/}
                        <span className='form__ref-button'> <Link to="/login"> Войти </Link> </span>
                    </div>
                </form>
             );
        }
    }

    const RegistrationFormWithConnect = connect(
        (state) => ({isRegistrated: state.registration.isRegistrated}),
        { registration }
    ) (RegistrationForm)
    
    export default RegistrationFormWithConnect ;