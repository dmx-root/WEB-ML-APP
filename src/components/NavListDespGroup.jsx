import '../style/navListDespGroup.css'

export function NavListDespGroup({children,title}){
    return(
        <div className="nav-list-item-group-container">
            {/* <div className="title-list-group-container">
                <span id='span-container'>{title}</span>
            </div> */}
            <div className="nav-list-group-container">
                <ol id="nav-list-group-container">
                    {children}
                </ol>
            </div>
        </div>
    )
}