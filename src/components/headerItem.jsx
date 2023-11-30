import '../style/headerItem.css'

export function HeaderItem({children,leabel}){
    return(
        <div className="header-item-container">
            <div className="header-item-icon-container">
                {children}
            </div>
            <div className="header-item-body-container">
                <span>{leabel}</span>
            </div>
            <div className="header-item-desp-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00000035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
        </div>
    )
}