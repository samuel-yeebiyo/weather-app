import '../css/mainScreen.css'

import Bar from '../assets/barometer.png'
import WinSpeed from '../assets/wind-sock.png'
import Humidity from '../assets/humidity.png'

import faved from '../assets/filled-star.png'
import notFaved from '../assets/empty-star.png'

import Next5 from './Next5'

const MainScreen = ({save, favs, current, weather}) => {

    //From api
    /*
    City name
    Country code
    icon
    description
    temprature
    apparent temprature
    humidity
    wind speed
    pressure

    Next 5
     */

    return (
        <div className="Main">
            <div className="current">
                <div className="location">
                    <p className="current-city"> {current.city_name || "- -"},   <span className="code"> {current.country_code || "- -"}</span></p>
                    <div className="current-star" onClick={()=>{
                        if(Object.keys(current).length !== 0){
                            save(current)
                        }
                    }}>{
                        favs.some(item => item.city_id == current.city_id) ?
                        <img src={faved} /> : <img src={notFaved}/>
                    }</div>
                </div>
                {Object.keys(weather.data[0].weather).length !== 0 ?
                    <img className="weather-icon" src={process.env.PUBLIC_URL+ `/icons/${weather.data[0].weather.icon}.png`}/> :
                    <img className="weather-icon" src=""/>
                }
                <p className="weather-description">{weather.data[0].weather.description || "- -"}</p>
                <div className="current-temp">
                    <span className="cur-num">{weather.data[0].temp || "- -"}</span><span className="cur-degree"></span>
                </div>
                <div className="apparent-temp">
                    <span className="app-num">{(weather.data[0].app_min_temp + weather.data[0].app_max_temp)/2|| "- -"}</span><span className="app-degree"></span>
                </div>
                <div className="meta">
                    <div className="meta-item hum">
                        <img src={Humidity}/>
                        <p>{weather.data[0].rh || "- -"}  %</p>
                    </div>
                    <div className="meta-item pres">
                        <img src={Bar}/>
                        <p>{weather.data[0].pres || "- -"}  mb</p>
                    </div>
                    <div className="meta-item spd">
                        <img src={WinSpeed}/>
                        <p>{weather.data[0].wind_spd || "- -"}  m/s</p>
                    </div>
                </div>
            </div>
            <Next5 weather={weather}/>
        </div>
    )
}

export default MainScreen
