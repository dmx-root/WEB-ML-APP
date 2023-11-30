import '../style/headerItemAction.css'

export function HeaderItemAction({children}){
    return(
        <div className="header-media-action-icon-container">
            <div className="header-action-container-icon">
                {children}
            </div>
        </div>
    )
}