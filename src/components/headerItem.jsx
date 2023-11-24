import '../style/headerItem.css'

export function HeaderItem(){
    return(
        <div className="header-item-container">
            <div className="header-item-icon-container"></div>
            <div className="header-item-body-container">
                <span>Items</span>
            </div>
            <div className="header-item-desp-container"></div>
        </div>
    )
}