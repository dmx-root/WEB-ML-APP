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
            <div className="icon-nav-group-group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
        </li>
    )
}