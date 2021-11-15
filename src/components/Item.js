import '../css/item.css'

import faved from '../assets/filled-star.png'
import notFaved from '../assets/empty-star.png'

const Item = ({save, mobile, city, favs, set}) => {


    //function to change main screen
    //function to save city

    return (
        <div className="Item">
            <div className="item-name" onClick={()=>{
                set(city)
                if(mobile){
                    console.log("Closing")
                    window.document.querySelector(".SideBar").classList.remove("showing")
                }
            }}>
                <span>{city.city_name}, {city.country_code}</span>
            </div>
            <div className="item-star" onClick={()=>{
                save(city)
            }}>{
                favs.some(item => item.city_id == city.city_id) ?
                <img src={faved} /> : <img src={notFaved}/>
            }</div>
        </div>
    )
}

export default Item
