import { useState } from 'react'
import '../style/settingsAsideItem.css'

export function SettingsAsideItem({label,handlerClick,selectItemState}){
    return(
        <lo id="settings-aside-item-lo-container" onClick={()=>handlerClick(label)}>
            <div className="settings-aside-item-container"  style={selectItemState==label?{backgroundColor:'#BBB'}:{}}>
                <span>{label}</span>
            </div>
        </lo>
    )
}