import '../style/userMainComponent.css';

export function UserMainComponent(){
    return(
        <div className="user-main-component-container">
            <div className="user-main-component-header-container">
                <div className="user-main-component-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#26387A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div className="user-main-component-information-container">
                    <div className="user-main-component-info">
                        <span>David M</span>
                    </div>
                    <div className="user-main-component-info">
                        <span>Revis</span>
                    </div>
                </div>
            </div>
            <div className="user-main-component-body-container">
                <div className="user-main-component-row-container">
                    <div className="user-main-component-title-container">
                        <span>Color:</span>
                    </div>
                    <div className="user-main-component-content-container">
                        <span>Piel</span>
                    </div>
                </div>
                <div className="user-main-component-row-container">
                    <div className="user-main-component-title-container">
                        <span>Módulo</span>
                    </div>
                    <div className="user-main-component-content-container">
                        <span>3</span>
                    </div>
                </div>
                <div className="user-main-component-row-container">
                    <div className="user-main-component-title-container">
                        <span>Hora-I</span>
                    </div>
                    <div className="user-main-component-content-container">
                        <span>10:25:11</span>
                    </div>
                </div>
                <div className="user-main-component-row-container">
                    <div className="user-main-component-title-container">
                        <span>Hora-F</span>
                    </div>
                    <div className="user-main-component-content-container">
                        <span>11:23:45</span>
                    </div>
                </div>
            </div>
        </div>
    )
}