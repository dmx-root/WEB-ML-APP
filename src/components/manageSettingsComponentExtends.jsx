import '../style/manageSettingsComponentExtends.css';

export function ManageSettingsComponentExtends({children}){
    return(
        <div className="manage-settings-component-extend-container">
            <div className="manage-setting-component-exdend-frame">
                {children}
            </div>
            <div className="manage-setting-component-exdend-action-container">
                <div className="manage-setting-component-exdend-button-container">
                    <button id='btn-cancelar'>
                        <span>Cancelar</span>
                    </button>
                </div>
                <div className="manage-setting-component-exdend-button-container">
                    <button id='btn-guardar'>
                        <span>Guardar</span>
                    </button>
                </div>
            </div>
        </div>
    )
}