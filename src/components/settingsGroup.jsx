import '../style/settingsTittle.css';

export function SettingsGroup({children,label}){
    return(
        <div className="settings-group-container">
            <div className="settings-group-tittle-container">
                <h2>{label}</h2>
            </div>
            <div className="settings-group-body-container">
                {children}
            </div>
        </div>
    )
}