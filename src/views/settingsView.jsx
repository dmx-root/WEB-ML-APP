import { SettingsHeader } from '../components/settingsHeader';
import { SettingsAside } from '../components/settingsAside';
import { SettingsAsideItem } from '../components/settingsAsideItem';
import { SettingsListEnvelope } from '../components/settingsListEnvelope';
import { SettingsListGroup } from '../components/settingsListGroup';
import { SettingsListItem } from '../components/settingsListItem';
import '../style/settingsView.css';
import {useMenuSelection} from '../controllers/controllers'
import { ModalExtendComponent } from '../components/modalExtendComponent';
import { ModalSettingEmployeeAddHeader } from '../components/modalSettingEmployeeAddHeader';
import { InputBarComponent } from '../components/InputBarComponent';
import { ModalSettingsEmployeeAddMain } from '../components/modalSettingsEmployeeAddMain';
import { ButtonActionAllWidth } from '../components/buttonActionAllWidth';

export function SettingsView(){

    const {selectedItem,handleItemClick}=useMenuSelection('Cuenta');

    return(
        <div className="settings-view-container">
            <div className="settings-view-nav-container">
                <SettingsAside>
                    <SettingsAsideItem label={'Cuenta'} handlerClick={handleItemClick} selectItemState={selectedItem}/>
                    <SettingsAsideItem label={'Elementos'} handlerClick={handleItemClick} selectItemState={selectedItem}/>
                    <SettingsAsideItem label={'Administrar procesos'} handlerClick={handleItemClick} selectItemState={selectedItem}/>
                </SettingsAside>
            </div>
            <div className="settings-view-body-container" >
                <div className="settings-view-header-conatiner">
                    <SettingsHeader/>
                </div>
                <div className="settings-view-main-container" >
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
                            <SettingsListItem label={'Eliminar operarios'}/>
                            <SettingsListItem label={'Eliminar operarios'}/>
                       </SettingsListGroup>
                    </SettingsListEnvelope>
                </div>
            </div>
            <ModalExtendComponent label={'AGREGAR OPERARIO AL PROCESO'}>
                <ModalSettingEmployeeAddHeader>
                    <InputBarComponent title={'SOLICITAR OPERARIO'} placeholder={'CODIGO DE USUARIO'} inputType={'text'}/> 
                </ModalSettingEmployeeAddHeader>
                <ModalSettingsEmployeeAddMain>
                    <InputBarComponent title={'SOLICITAR OPERARIO'} placeholder={'CODIGO DE USUARIO'} inputType={'text'}/>    
                    <InputBarComponent title={'SOLICITAR OPERARIO'} placeholder={'CODIGO DE USUARIO'} inputType={'text'}/>    
                </ModalSettingsEmployeeAddMain>
                <ButtonActionAllWidth label={'AGREGAR'} backColor={'#26387A'} LetterColor={'#FFF'}/>   
            </ModalExtendComponent>
        </div>
    )
}