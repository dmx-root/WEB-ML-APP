import '../style/modalSettingEmployeeAddHeader.css'

export function ModalSettingEmployeeAddHeader({children}){
    return(
        <div className="modal-setting-employee-add-header-container">
            <div className="modal-setting-employee-add-header-frame-container">
                {children}
            </div>
        </div>
    )
}