import '../css/sidebar.css'

import Saved from './Saved'
import Search from './Search'

const SideBar = ({option, save, favs}) => {

    console.log(option)

    return (
        <div className="SideBar">
            {
                option == 0 ? <Search favs={favs} save={save}/> : <Saved save={save} favs={favs}/>
            }
        </div>
    )
}

export default SideBar
