import '../css/saved.css'

import Card from './Card'

const Saved = ({save, favs, setCurrent}) => {
    return (
        <div className="Saved">
            {favs.length > 0 ? 
                favs.map((item)=>(
                    <Card city={item} save={save} set={setCurrent}/>
                )) :
                <p>No saved locations</p>
            }
        </div>
    )
}

export default Saved
