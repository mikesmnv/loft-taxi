import React from 'react';
<<<<<<< Updated upstream

class RegistrationForm extends React.Component {

=======
import PropTypes from 'prop-types';
import { Link, Navigate, useNavigate} from "react-router-dom";

class RegistrationForm extends React.Component {

    // static propTypes = {
    //     navigate: PropTypes.func
    // }
    
>>>>>>> Stashed changes
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
        //<Navigate replace to="/login" />
        //this.props.navigate("home");
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
<<<<<<< Updated upstream
                <button type="submit" className="input-button">Зарегистрироваться</button>
=======
                <button type="submit" className="form__button">Зарегистрироваться</button>
                <div className='form__footer'>
                    <span>Уже зарегистрировался?</span>
                    {/*<span className='form__ref-button' onClick={() => this.props.navigate("login")}>Войти</span>*/}
                    <span className='form__ref-button'> <Link to="/login"> Войти </Link> </span>
                </div>
>>>>>>> Stashed changes
            </form>
        );
        }
    }

    export default RegistrationForm;