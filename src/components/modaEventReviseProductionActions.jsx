import '../style/modaEventReviseProductionActions.css';

export function ModalEventReviseProductionActions(){
    return(
        <div className="modal-eventt-revise-production-action-container">
            <div className="modal-eventt-revise-production-action-frame-container">
                <div className="modal-eventt-revise-production-action-button-container btn-evt-container">
                    <button>
                        <span>ANOTACIONES</span>
                    </button>
                </div>
                <div className="modal-eventt-revise-production-action-button-container btn-rvs-container">
                    <button>
                        <span>REVISAR</span>
                    </button>
                </div>
            </div>
        </div>
    )
}