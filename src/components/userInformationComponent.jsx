import '../style/userInformationComponent.css';

export function UserInformationComponent({data}){
    return(
        <div className="user-information-component-container">
            <div className="user-information-component-frame">
                <div className="user-information-component-icon-container">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </span>
                </div>
                <div className="user-information-component-content-container">
                    <div className="user-information-component-content-row-container">
                        <div className="user-information-component-content-row-name-container">
                            <span>{'David Morales'}</span>
                        </div>
                        <div className="user-information-component-content-row-profile-container">
                            <span>{'Administrador de Sistema'}</span>
                        </div>
                    </div>
                    <div className="user-information-component-content-row-container user-information-desc">
                        <div className="user-information-component-content-row-description-container">
                            <span>{'Desarrollador junior'}</span>
                        </div>
                        <div className="user-information-component-content-row-state-container">
                            <span>{`Estado: ${'Activo'}`}</span>
                        </div>
                    </div>
                    <div className="user-information-component-content-row-container user-information-doc-type">
                        <span>{'Tipo de documento'}</span>
                    </div>
                    <div className="user-information-component-content-row-container user-information-doc">
                        <span>{'1146441925'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}