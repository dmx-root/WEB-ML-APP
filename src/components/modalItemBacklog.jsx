import '../style/modalItemBacklog.css';

export function ModalItemBacklog({children}){
    return(
        <li id="modal-item-backlog-li-container">
            <div className="modal-item-backlog-container">
                <div className="modal-item-backlog-date-container">21/05/2023</div>
                <div className="modal-item-backlog-time-container">10:25:13</div>
                <div className="modal-item-backlog-icon-container">
                    {children}
                </div>
                <div className="modal-item-backlog-description-container">creo una op</div>
            </div>
        </li>
    )
}