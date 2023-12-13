import '../style/modalEventReviseProductionAnnotationItemInput.css';

export function ModalEventReviseProductionAnnotationItemInput({title}){
    return(
        <div className="modal-eventt-revise-production-annotation-item-input-container">
            <div className="modal-eventt-revise-production-annotation-item-input-row-container">
                <div className="modal-eventt-revise-production-annotation-item-input-row-column-container modal-evt-annotation-input-title">
                    <span>{title}</span>
                </div>
                <div className="modal-eventt-revise-production-annotation-item-input-row-column-container modal-evt-content-input-title">
                    <input type="text" placeholder='Ingrese las unidades recibidas'/>
                </div>
            </div>
        </div>
    )
}