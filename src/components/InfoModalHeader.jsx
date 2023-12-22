import '../style/InfoModalHeader.css';

export function InfoModalHeader({children,icon}){
    return(
        <div className="info-modal-header-container">
            <div className="info-modal-header-frame-container">
                <div className="info-modal-header-icon-container">
                    {icon}
                </div>
                <div className="info-modal-header-info-container">
                    {children}
                </div>
            </div>
        </div>
    )
}