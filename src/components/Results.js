import { useState, useEffect } from 'react'

import Item from "./Item"
import axios from 'axios'

import '../css/results.css'

const Results = ({favs, save, set, mobile, searching, count}) => {

    const [results, setResults] = useState([])

    useEffect(()=>{
        console.log(results[0])
        if(searching.length > 2){
            
            let sub_option = {
                method: 'POST',
                url: 'https://shrouded-escarpment-48686.herokuapp.com/searching',
                data: {query: `${searching}`, count: count},
                headers:{
                  'Content-Type':'application/json',
                }
            };
      
            axios.request(sub_option).then(function(response){
    
                console.log("Got city")
                setResults(response.data)
            
            })

        }else{
            setResults([])
        }
    },[searching])

    return (
        <div className="Results">
            {
                results.map((item)=>(
                    <Item save={save} mobile={mobile} city={item} favs={favs} set={set}/>
                ))
            }
        </div>
    )
}

export default Results
