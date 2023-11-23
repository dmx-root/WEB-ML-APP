import '../style/menuItemGroup.css'


export function MenuItemGroup({children,title}){

    return(
        <div className="nav-menu-item-group-container">
            <div className="title-group-container">
                <span>{title}</span>
            </div>
            <div className="list-group-container">
                <ol id="list-group-container">
                    {children}
                </ol>
            </div>
        </div>
    )
}