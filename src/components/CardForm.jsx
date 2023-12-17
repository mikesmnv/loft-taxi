import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveCard, getCard } from "../actions.js";

class CardForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const cardNumber = event.target.cardNumber.value;
        const expirDate = event.target.expirDate.value;
        const ownersName = event.target.ownersName.value;
        const cvcCode = event.target.cvcCode.value;
        const token = this.props.authToken;
        this.props.saveCard(cardNumber, expirDate, ownersName, cvcCode, token);
      };

      componentDidMount() {
        const token = this.props.token;
        this.props.getCard(token);       
      }

      render() {
            const isHavingCard = this.props.isHavingCard;
            return ( isHavingCard ? <span className='form__reg-button'> <Link to="/home"> Перейти к заказу такси </Link> </span> :
                <form title='Профиль' className='card-form' onSubmit={this.handleSubmit}>
                    <div className='form__tittle'>Профиль</div>
                    <label htmlFor="cardNumber">Номер карты</label>
                    <input id="cardNumber" type="text" name="cardNumber" size="20" />
                    <label htmlFor="expirDate">Срок действия</label>
                    <input id="expirDate" type="date" name="expirDate" size="14" />
                    <label htmlFor="ownersName">Имя владельца</label>
                    <input id="ownersName" type="text" name="ownersName" size="20" />
                    <label htmlFor="cvcCode">Пароль</label>
                    <input id="cvcCode" type="password" name="cvcCode" size="5" />
                    <button type="submit" className="form__button">Сохранить</button>
                </form>
             );
        }
    }

    const CardFormWithConnect = connect(
        (state) => ({isHavingCard: state.card.isHavingCard, token: state.auth.authToken}),
        { saveCard, getCard}
    ) (CardForm)
    
    export default CardFormWithConnect ;