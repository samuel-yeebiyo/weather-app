import '../css/card.css'

import faved from '../assets/filled-star.png'

const Card = ({city, save}) => {

    //store entire api info here

    //display from api
    //city name
    //temp
    //weather icon

    //function to change state in main screen

    return (
        <div className="Card" onClick={()=>{console.log("Changing current display")}}>
            <div className="card-image"></div>
            <div className="fav" onClick={()=>{
                save(city)
            }}> <img src={faved}/></div>
            <div className="card-info">
                <p>{city.city_name.toUpperCase()}</p>
                <div className="card-temp">
                    <span className="card-num">-4</span><span className="card-degree"></span>
                </div>
                <img src=""/>
            </div>
        </div>
    )
}

export default Card
