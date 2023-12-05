import '../style/settingsAside.css';

export function SettingsAside({children,label}){
    return(
        <div className="settings-aside-container">
            <div className="settings-aside-header-container">
                <div className="settings-aside-header-icon-container">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </span>
                </div>
                <div className="settings-aside-header-label-container">
                    <h1>{label}</h1>
                </div>
            </div>
            <div className="settings-aside-items-list-container">
                <div className="settings-aside-item-list-frame-container">
                    {children}
                </div>
            </div>
        </div>
    )
}