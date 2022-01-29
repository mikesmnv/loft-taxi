import React from 'react';

const RoadRoute = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const startingPoint = event.target.startingPoint.value;
        const finishingPoint = event.target.finishingPoint.value;
        //const taxiType = event.target.standart.value;
        console.log(startingPoint, finishingPoint);
    }

    return (               
        <form className='road-form' onSubmit={ handleSubmit }>
            <input id="startingPoint" type="text" name="startingPoint" size="20" />
            <input id="finishingPoint" type="text" name="finishingPoint" size="14" />
            <div className="taxi">
                <span><input id="standart" type="image" alt="Стандарт" name="standart"/></span>
                <span><input id="premium" type="image" alt="Премиум" name="premium"/></span>
                <span><input id="business" type="image" alt="Бизнес" name="business"/></span>
            </div>
            <button type="submit" className="form__button">Заказать</button>
        </form> 
    )
}

export default RoadRoute;