import '../style/modalOpHeaderItem.css';

export function ModalOpHeaderItem({label1,content1,label2,content2}){
    return(
        <div className="modal-op-header-item-container">
            <div className="modal-op-header-item-colum modal-op-header-item-colum-title">
                <span>{label1}</span>
            </div>
            <div className="modal-op-header-item-colum modal-op-header-item-colum-content">
                <span>{content1}</span>
            </div>
            <div className="modal-op-header-item-colum modal-op-header-item-colum-title">
                <span>{label2}</span>
            </div>
            <div className="modal-op-header-item-colum modal-op-header-item-colum-content">
                <span>{content2}</span>
            </div>
        </div>
    )
}