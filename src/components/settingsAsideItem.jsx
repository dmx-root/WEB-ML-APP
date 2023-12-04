import '../style/settingsAsideItem.css'

export function SettingsAsideItem({label}){
    return(
        <lo id="settings-aside-item-lo-container">
            <div className="settings-aside-item-container">
                <span>{label}</span>
            </div>
        </lo>
    )
}