import { SettingsHeader } from '../components/settingsHeader';
import { SettingsAside } from '../components/settingsAside';
import { SettingsAsideItem } from '../components/settingsAsideItem';
import { SettingsListEnvelope } from '../components/settingsListEnvelope';
import { SettingsListGroup } from '../components/settingsListGroup';
import { SettingsListItem } from '../components/settingsListItem';
import '../style/settingsView.css';

export function SettingsView(){
    return(
        <div className="settings-view-container">
            <div className="settings-view-nav-container">
                <SettingsAside>
                    <SettingsAsideItem label={'Cuenta'}/>
                    <SettingsAsideItem label={'Elementos'}/>
                    <SettingsAsideItem label={'Administrar procesos'}/>
                </SettingsAside>
            </div>
            <div className="settings-view-body-container">
                <div className="settings-view-header-conatiner">
                    <SettingsHeader/>
                </div>
                <div className="settings-view-main-container">
                    
                    <SettingsListEnvelope>
                       <SettingsListGroup label={'Operarios'}>
                            <SettingsListItem label={'Agregar operarios'}/>
                            <SettingsListItem label={'Eliminar operarios'}/>
                            <SettingsListItem label={'Editar operario'}/>
                            <SettingsListItem label={'Asignar operario'}/>
                       </SettingsListGroup>
                       <SettingsListGroup label={'Modulos'}>
                            <></>
                            <SettingsListItem label={'Asignar operario'}/>
                            <SettingsListItem label={'Asignar operario'}/>
                            <SettingsListItem label={'Asignar operario'}/>
                            <SettingsListItem label={'Asignar operario'}/>
                            <SettingsListItem label={'Asignar operario'}/>
                            <SettingsListItem label={'Asignar operario'}/>
                            <SettingsListItem label={'Asignar operario'}/>
                       </SettingsListGroup>
                       <SettingsListGroup label={'Usuarios'}>
                            <></>
                            <SettingsListItem label={'Eliminar operarios'}/>
                            <SettingsListItem label={'Eliminar operarios'}/>
                       </SettingsListGroup>
                    </SettingsListEnvelope>
                </div>
            </div>
        </div>
    )
}