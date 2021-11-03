import '../css/mainScreen.css'

import Bar from '../assets/barometer.png'
import WinSpeed from '../assets/wind-sock.png'
import Humidity from '../assets/humidity.png'

import faved from '../assets/filled-star.png'
import notFaved from '../assets/empty-star.png'

import Next5 from './Next5'

const MainScreen = ({save, favs, current}) => {

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
                    <p className="current-city"> {current.city_name},   <span className="code"> {current.country_code}</span></p>
                    <div className="current-star" onClick={()=>{
                        save(current)
                    }}>{
                        favs.some(item => item.city_id == current.city_id) ?
                        <img src={faved} /> : <img src={notFaved}/>
                    }</div>
                </div>
                <img className="weather-icon" src=""/>
                <p className="weather-description">Scattered Clouds</p>
                <div className="current-temp">
                    <span className="cur-num">-4</span><span className="cur-degree"></span>
                </div>
                <div className="apparent-temp">
                    <span className="app-num">-4</span><span className="app-degree"></span>
                </div>
                <div className="meta">
                    <div className="meta-item hum">
                        <img src={Humidity}/>
                        <p>20%</p>
                    </div>
                    <div className="meta-item pres">
                        <img src={Bar}/>
                        <p>1000 mb</p>
                    </div>
                    <div className="meta-item spd">
                        <img src={WinSpeed}/>
                        <p>900 m/s</p>
                    </div>
                </div>
            </div>
            <Next5/>
        </div>
    )
}

export default MainScreen
