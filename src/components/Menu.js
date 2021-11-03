import '../css/menu.css'

const Menu = ({change}) => {
    return (
        <div className="Menu">
            <div className="options">
                <p onClick={()=>{
                    change(1)
                }}>Saved</p>

                <div>|</div>

                <p onClick={()=>{
                    change(0)
                }}>Search</p>
            </div>
        </div>
    )
}

export default Menu
