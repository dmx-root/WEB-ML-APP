import '../style/moduloInformationComponent.css';

export function ModuloInformationComponent(){
    return(
        <div className="modulo-information-component-container">
            <div className="modulo-information-component-frame">
                <div className="modulo-information-component-icon-container">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </span>
                </div>
                <div className="modulo-information-component-content-container">
                    <div className="modulo-information-component-content-row-container">
                        <div className="modulo-information-component-content-row-name-container">
                            <span>{'MÓDULO-1'}</span>
                        </div>
                        <div className="modulo-information-component-content-row-profile-container">
                            <span>{`Estado : ${'Activo'}`}</span>
                        </div>
                    </div>
                    <div className="modulo-information-component-content-row-container modulo-information-desc">
                        <div className="modulo-information-component-content-row-description-container">
                            <span>{'Número de operario: 12'}</span>
                        </div>
                        <div className="modulo-information-component-content-row-state-container">
                            <span>{`Estado de actividad: ${'Activo'}`}</span>
                        </div>
                    </div>
                    <div className="modulo-information-component-content-row-container modulo-information-doc-type">
                        <span>{'Número de máquinas: 12'}</span>
                    </div>
                    <div className="modulo-information-component-content-row-container modulo-information-doc">
                        <span>{'Eficiencia: '}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}