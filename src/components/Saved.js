import '../css/saved.css'

import Card from './Card'

const Saved = ({save, mobile, favs, setCurrent}) => {
    return (
        <div className="Saved">
            {favs.length > 0 ? 
                favs.map((item)=>(
                    <Card mobile={mobile} city={item} save={save} set={setCurrent}/>
                )) :
                <p>No saved locations</p>
            }
        </div>
    )
}

export default Saved
