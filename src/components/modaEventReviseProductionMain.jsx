import { ModalEventReviseProductionMainItem } from './modalEventReviseProductionMainItem';
import '../style/modaEventReviseProductionMain.css';

export function ModalEventReviseProductionMain({children}){
    return (
        <div className="modal-eventt-revise-production-main-container">
            <div className="modal-eventt-revise-production-main-frame-container">
                {children}
            </div>
        </div>
    )
}