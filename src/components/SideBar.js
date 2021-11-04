import '../css/sidebar.css'

import Saved from './Saved'
import Search from './Search'

const SideBar = ({option, save, favs, setCurrent, now}) => {

    console.log(option)

    return (
        <div className="SideBar">
            {
                option == 0 ? <Search favs={favs} save={save} setCurrent={setCurrent} /> : <Saved save={save} favs={favs} setCurrent={setCurrent}/>
            }
        </div>
    )
}

export default SideBar
