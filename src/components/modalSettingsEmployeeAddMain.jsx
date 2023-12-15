import '../style/modalSettingsEmployeeAddMain.css';

export function ModalSettingsEmployeeAddMain({children, label}){
    return(
        <div className="modal-setting-employee-add-main-container">
            <div className="modal-setting-employee-add-main-frame">
                <div className="modal-setting-employee-add-main-title-container">
                    <span>{label}</span>
                </div>
                {children}
            </div>
        </div>
    )
}