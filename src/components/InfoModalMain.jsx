import '../style/InfoModalMain.css';

export function InfoModalMain({children}){
    return(
        <div className="info-modal-main-container">
            <div className="info-modal-main-frame-container">
                <div className="info-modal-main-title-container">
                    <div className="info-modal-main-item-list-colum-container"><span>TALLA</span></div>
                    <div className="info-modal-main-item-list-colum-container"><span>EAN</span></div>
                    <div className="info-modal-main-item-list-colum-container"><span>CATIDAD</span></div>
                </div>
                <div className="info-modal-main-item-list-container">
                    {children}
                </div>
            </div>
        </div>
    )
}