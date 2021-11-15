import '../css/card.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import faved from '../assets/filled-star.png'

const Card = ({ mobile, city, save, set}) => {
    
    const [weather, setWeather] = useState({
        data:[{
            weather:{}
        }]
    })

    useEffect(()=>{

        let options = {
            method: 'GET',
            url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
            params: {lat: `${city.lat}`, lon: `${city.lon}`},
            headers: {
              'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        };
      
        axios.request(options).then(function (response) {
        console.log(response.data)
        setWeather(response.data);
        }).catch(function (error) {
        console.error(error);
        });
    }, [])
    
       

    return (
        <div className="Card" onClick={(e)=>{
            e.stopPropagation()
            set(city)
            if(mobile){
                window.document.querySelector(".SideBar").classList.remove("showing")
            }
        }}>
            <div className="card-image">
                <img src={process.env.PUBLIC_URL + `/cities/${city.city_name}.jpg`}/>
            </div>
            <div className="fav" onClick={(e)=>{
                e.stopPropagation()
                save(city)
            }}> <img src={faved}/></div>
            <div className="card-info">
                <p>{city.city_name.toUpperCase()}</p>
                <div className="card-temp">
                    <span className="card-num">{weather.data[0].temp || "- -"}</span><span className="card-degree"></span>
                </div>
                {Object.keys(weather.data[0].weather).length !== 0 ?
                    <img className="weather-icon" src={process.env.PUBLIC_URL+ `/icons/${weather.data[0].weather.icon}.png`}/> :
                    <img className="weather-icon" src=""/>
                }
            </div>
        </div>
    )
}

export default Card
