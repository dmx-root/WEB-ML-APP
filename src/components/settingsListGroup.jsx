import '../style/settingsListGroup.css';

export function SettingsListGroup({children,label}){
    return(
        <li id="settings-list-group-li-container">
            <div className="settings-list-group-container">
                <div className="settings-list-group-frame-container">
                    <div className="settings-list-group-header-container">
                        <span>{label}</span>
                    </div>
                    <div className="settings-list-group-body-container">
                        <ol>
                            {children}
                        </ol>
                    </div>
                </div>
            </div>
        </li>
    )
}