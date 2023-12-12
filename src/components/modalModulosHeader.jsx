import '../style/modalModulosHeader.css'
import { ModalModulosHeaderAnalitycs } from './modalModulosHeaderAnalitycs'
import { ModalModulosHeaderEmployees } from './modalModulosHeaderEmployees'
import { ModalModulosHeaderProcessesInformation } from './modalModulosHeaderProcessesInformation'

export function ModalModulosHeader(){
    return (
        <div className="modal-modulos-header-container">
            <div className="modal-modulos-header-frame-container">
                <div className="modal-modulos-header-element-container">
                    <ModalModulosHeaderEmployees/>
                </div>
                <div className="modal-modulos-header-element-container">
                    <ModalModulosHeaderProcessesInformation/>
                </div>
                <div className="modal-modulos-header-element-container">
                    <ModalModulosHeaderAnalitycs/>
                </div>
            </div>
        </div>
    )
}