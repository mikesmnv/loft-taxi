import React from 'react';
import { useState } from 'react';

const RoadRoute = (props) => {

    const [taxiType, setTaxiType] = useState("standart");

    const handleSubmit = (event) => {
        event.preventDefault();
        const startingPoint = event.target.startingPoint.value;
        const finishingPoint = event.target.finishingPoint.value;
        console.log(startingPoint, finishingPoint, taxiType);
    }

    return (               
        <form className='road-form' onSubmit={ handleSubmit }>
            <input id="startingPoint" type="text" name="startingPoint" size="20" />
            <input id="finishingPoint" type="text" name="finishingPoint" size="14" />
            <div className="taxi">
                <span onClick={(event)=>{ event.preventDefault(); setTaxiType("standart")}}>
                    <img id="standart" src="#" alt="Стандарт" name="standart"/></span>
                <span onClick={(event)=>{ event.preventDefault(); setTaxiType("premium")}}>
                    <img id="premium" src="#" alt="Премиум" name="premium"/></span>
                <span onClick={(event)=>{ event.preventDefault(); setTaxiType("business")}}>
                    <img id="business" src="#" alt="Бизнес" name="business"/></span>
            </div>
            <button type="submit" className="form__button">Заказать</button>
        </form> 
    )
}

export default RoadRoute;