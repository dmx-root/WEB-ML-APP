import '../style/settingsListItem.css';

export function SettingsListItem({label}){
    return(
        <li id="settings-List-Item-li-container">
            <div className="settings-List-Item-container">
                <span>{label}</span>
            </div>
        </li>
    )
}