
import '../css/sidebar.css'

import Saved from './Saved'
import Search from './Search'

const SideBar = ({option}) => {

    console.log(option)

    return (
        <div className="SideBar">
            {
                option == 0 ? <Search/> : <Saved/>
            }
              
        </div>
    )
}

export default SideBar
