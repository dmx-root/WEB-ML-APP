import { SettingsHeader } from '../components/settingsHeader'
import { SettingsListEnvelope } from '../components/settingsListEnvelope'
import { SettingsListGroup } from '../components/settingsListGroup'
import { SettingsListItem } from '../components/settingsListItem'
import { UserProfileAside } from '../components/userProfileAside'
import '../style/userProfileView.css'

export function UserProfileView(){
    return(
        <div className="user-profile-view-container">
            <div className="user-profile-view-aside-container">
                <UserProfileAside/>
            </div>
            <div className="user-profile-view-body-container">
                <div className="user-profile-view-body-header-container">
                    <SettingsHeader/>
                </div>
                <div className="user-profile-view-body-main-container">
                    <SettingsListEnvelope>
                        <SettingsListGroup label={'Editar perfíl'}>
                            <SettingsListItem label={'reestablecer nombre de usuario'}/>
                            <SettingsListItem label={'reestablecer descripcion'}/>
                            <SettingsListItem label={'reeestablecer tipo de documento'}/>
                            <SettingsListItem label={'reestablecer contraseña'}/>
                        </SettingsListGroup>
                        <SettingsListGroup label={'Ver historial'}>
                            <SettingsListItem label={'Historial de OP'}/>
                            <SettingsListItem label={'Historial de OCR'}/>
                            <SettingsListItem label={'Historial de Módulo'}/>
                            <SettingsListItem label={'Historial administrativo'}/>
                        </SettingsListGroup>
                    </SettingsListEnvelope>
                </div>
            </div>
        </div>
    )
}