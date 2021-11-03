import { useState, useEffect } from 'react'

import {cities} from '../data/cities'
import Item from "./Item"

import '../css/results.css'

const Results = ({favs, save, searching, count}) => {

    const [results, setResults] = useState([])

    function parameter (value){
        let city = value.city_name.toLowerCase()
        let key = searching.toLowerCase()

        return city.includes(key);
    }

    useEffect(()=>{
        console.log(results[0])
        if(searching.length > 2){
            let copy = [...cities]
            let filtered = copy.filter(parameter)
            if(filtered.length > count){
                filtered = filtered.slice(0, count);
            }

            setResults(filtered);   
        }else{
            setResults([])
        }
    },[searching])

    return (
        <div className="Results">
            {
                results.map((item)=>(
                    <Item save={save} city={item} favs={favs}/>
                ))
            }
        </div>
    )
}

export default Results
