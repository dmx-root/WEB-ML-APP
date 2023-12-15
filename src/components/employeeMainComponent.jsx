import '../style/employeeMainComponent.css';

export function EmployeeMainComponent(){
    return(
        <div className="employe-main-component-container">
            <div className="employe-main-component-frame-container">
                <div className="employe-main-component-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div className="employe-main-component-info-container">
                    <div className="employe-main-component-info-row-container employe-main-component-info-lab">
                        <span>David Esteban Morales</span>
                    </div>
                    <div className="employe-main-component-info-row-container employe-main-component-info-doc">
                        <span>1146441925</span>
                    </div>
                    <div className="employe-main-component-info-row-container  employe-main-component-info-cod">
                        <span>325</span>
                    </div>
                </div>
            </div>
        </div>
    )
}