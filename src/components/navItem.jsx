import '../style/navItem.css'


export function NavItem({children,label}){
    return(
        <li id="nav-item-container">
            <div className="icon-nav-item-container">
                {children}
            </div>
            <div className="body-nav-item-container">
                <span>{label}</span>
            </div>
            <div className="icon-nav-group-group"></div>
        </li>
    )
}