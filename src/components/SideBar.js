import '../css/sidebar.css'

import Saved from './Saved'
import Search from './Search'

const SideBar = ({option, save, favs, mobile, setCurrent, now}) => {

    console.log(option)

    return (
        <div className="SideBar">
            {
                option == 0 ? <Search mobile={mobile} favs={favs} save={save} setCurrent={setCurrent} /> : <Saved mobile ={mobile} save={save} favs={favs} setCurrent={setCurrent}/>
            }
        </div>
    )
}

export default SideBar
