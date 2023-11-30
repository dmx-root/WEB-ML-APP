import '../style/headerListDespGroup.css'

export function HeaderListDespGroup({children}){
    return(
        <div className="header-list-desp-group-container">
            <div className="header-list-desp-group-frame">
                {children}
            </div>
        </div>
    )
}