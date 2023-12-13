import '../style/modalEventReviseProductionAnnotationItem.css';

export function ModalEventReviseProductionAnnotationItem({title,content}){
    return(
        <div className="modal-eventt-revise-production-annotation-item-container">
            <div className="modal-eventt-revise-production-annotation-item-row-container">
                <div className="modal-eventt-revise-production-annotation-item-row-column-container modal-evt-annotation-title">
                    <span>{title}</span>
                </div>
                <div className="modal-eventt-revise-production-annotation-item-row-column-container modal-evt-content-title">
                    <span>{content}</span>
                </div>
            </div>
        </div>
    )
}