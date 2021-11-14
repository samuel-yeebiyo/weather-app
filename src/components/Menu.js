import '../css/menu.css'

const Menu = ({current, mobile, change}) => {
    return (
        <div className="Menu">
            <div className="options">
                <p onClick={()=>{
                    change(1)
                    if(mobile && current == 1){
                        window.document.querySelector(".SideBar").classList.toggle("showing")
                    }else{
                        window.document.querySelector(".SideBar").classList.add("showing")
                    }
                }}>Saved</p>

                <div>|</div>

                <p onClick={()=>{
                    change(0)
                    if(mobile && current == 0){
                        window.document.querySelector(".SideBar").classList.toggle("showing")
                    }else{
                        window.document.querySelector(".SideBar").classList.add("showing")
                    }
                }}>Search</p>
            </div>
        </div>
    )
}

export default Menu
