import '../style/modaEventReviseProductionMainItem.css';

export function ModalEventReviseProductionMainItem({title1,content1,title2,content2}){
    return(
        <div className="modal-eventt-revise-production-main-item-container">
            <div className="modal-eventt-revise-production-main-item-row-container">
                <div className="modal-eventt-revise-production-main-item-row-column-container modal-evt-title">
                    <span>{title1}</span>
                </div>
                <div className="modal-eventt-revise-production-main-item-row-column-container modal-evt-content">
                    <span>{content1}</span>
                </div>
                <div className="modal-eventt-revise-production-main-item-row-column-container modal-evt-title">
                    <span>{title2}</span>
                </div>
                <div className="modal-eventt-revise-production-main-item-row-column-container modal-evt-content">
                    <span>{content2}</span>
                </div>
            </div>
        </div>
    )
}