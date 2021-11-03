import '../css/item.css'

import faved from '../assets/filled-star.png'
import notFaved from '../assets/empty-star.png'

const Item = ({save, city, favs}) => {


    //function to change main screen
    //function to save city

    return (
        <div className="Item" onClick={()=>{console.log("Changing current display")}}>
            <span>{city.city_name}, {city.country_code}</span>
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