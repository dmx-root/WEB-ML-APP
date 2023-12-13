import '../style/modaEventReviseProductionHeader.css';
import { ModalEventReviseProductionMainItem } from './modalEventReviseProductionMainItem';

export function ModaEventReviseProductionHeader({children}){
    return (
        <div className="modal-eventt-revise-production-header-container">
            <div className="modal-eventt-revise-production-header-frame-container">
                {children}
            </div>
        </div>
    )
}