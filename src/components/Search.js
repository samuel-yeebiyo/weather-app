import { useState, useEffect } from 'react'
import '../css/search.css'
import icon from '../assets/search.png'
import Results from './Results'

const Search = ({save, favs, mobile, setCurrent}) => {

    const [search, setSearch] = useState('')

    return (
        <div className="Search">
            <div className="search-bar">
                <img src={icon} />
                <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder="City Name" className="input"></input>
            </div>
            <Results mobile={mobile} favs={favs} save={save} set={setCurrent} searching={search} count={10}/>         
        </div>
    )
}

export default Search
