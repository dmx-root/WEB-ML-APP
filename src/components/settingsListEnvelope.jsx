import '../style/settingsListEnvelope.css';

export function SettingsListEnvelope({children}){
    return(    
    <div className="settings-list-envelope-container">
        <div className="settings-list-envelope-frame">
            {children}
        </div>
    </div>
    )
}