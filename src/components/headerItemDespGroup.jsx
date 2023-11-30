import '../style/headerItemDespGroup.css'

export function HeaderItemDespGroup({label}){
    return(
        <div className="header-item-desp-group-container">
            <div className="header-item-desp-group-label-container">
                <span>{label}</span>
            </div>
        </div>
    )
}