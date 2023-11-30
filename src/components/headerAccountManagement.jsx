import '../style/headerAccountManagement.css';

export function HeaderAccountManagement({children, label}){
    return(
        <div className="header-Account-management-container">
            <div className="header-Account-management-frame">
                <div className="header-item-desp-group-container">
                    <div className="header-item-desp-group-label-container">
                        <span  style={{fontWeight:'bold'}}>{label}</span>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}