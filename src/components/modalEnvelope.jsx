import '../style/modalEnvelope.css';

export function ModalEnvelope({children}){
    return(
        <div className="modal-envelope-container">
            <div className="modal-envelope-frame-container">
                {children}
            </div>
        </div>
    )
}