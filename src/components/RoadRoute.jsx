import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addressList, routeTo } from "../actions";

const RoadRoute = (props) => {

    const [taxiType, setTaxiType] = useState("standart");
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        props.addressList();
        setAddresses(props.addresses);
    }, [0]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const startingPoint = event.target.startingPoint.value;
        const finishingPoint = event.target.finishingPoint.value;
        console.log(startingPoint, finishingPoint, taxiType);
        props.routeTo(startingPoint, finishingPoint);
    }

    const isHavingCard = props.isHavingCard;
    const addressesList = addresses;

   console.log(props.addresses)

    return ( isHavingCard ?             
        <form className='road-form' onSubmit={ handleSubmit }>
            <select id="startingPoint" type="text" name="startingPoint"> 
               { addressesList.map((item) => (<option>{item}</option>)) }
            </select>
            <select id="finishingPoint" type="text" name="finishingPoint"> 
            { addressesList.map((item) => (<option>{item}</option>)) }
            </select>
            <div className="taxi">
                <span onClick={(event)=>{ event.preventDefault(); setTaxiType("standart")}}>
                    <img id="standart" src="#" alt="Стандарт" name="standart"/></span>
                <span onClick={(event)=>{ event.preventDefault(); setTaxiType("premium")}}>
                    <img id="premium" src="#" alt="Премиум" name="premium"/></span>
                <span onClick={(event)=>{ event.preventDefault(); setTaxiType("business")}}>
                    <img id="business" src="#" alt="Бизнес" name="business"/></span>
            </div>
            <button type="submit" className="form__button">Заказать</button>
        </form> : <div className='road-form'><Link to="/profile">Для заказа такси необходимо добавить карту</Link></div>
    )
}

const RoadRouteWithConnect = connect(
    (state) => ({isHavingCard: state.card.isHavingCard,
                 addresses: state.addresses.addresses}),
    { addressList, routeTo }
) (RoadRoute)

export default RoadRouteWithConnect;