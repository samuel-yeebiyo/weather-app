import '../css/mainScreen.css'

import Next5 from './Next5'

const MainScreen = () => {

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
                <div className="location"> Accra, 
                    <span className="code"> GH</span>
                    <span onClick={()=>{console.log("Saved location")}}>⭐</span>
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
                    <div className="meta-item">
                        <img src=""/>
                        <p>20%</p>
                    </div>
                    <div className="meta-item">
                        <img src=""/>
                        <p>1000 mb</p>
                    </div>
                    <div className="meta-item">
                        <img src=""/>
                        <p>900 m/s</p>
                    </div>
                </div>
            </div>
            <Next5/>
        </div>
    )
}

export default MainScreen
