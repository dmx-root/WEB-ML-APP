import { InfoModalHeader }                  from '../components/InfoModalHeader'
import { InfoModalMain }                    from '../components/InfoModalMain'
import { InfoModalRow }                     from '../components/InfoModalRow'
import { SettingsGroup }                    from '../components/settingsGroup'
import { SettingsHeader }                   from '../components/settingsHeader'
import { SettingsListEnvelope }             from '../components/settingsListEnvelope'
import { SettingsListGroup }                from '../components/settingsListGroup'
import { SettingsListItem }                 from '../components/settingsListItem'
import { UserProfileAside }                 from '../components/userProfileAside'
import { ModalEnvelope }                    from '../components/modalEnvelope'
import { ModalExtendComponent }             from '../components/modalExtendComponent'
import { ModalOpHeaderItem }                from '../components/modalOpHeaderItem'
import { InputBarComponent }                from '../components/InputBarComponent'
import { InputSliderComponent }             from '../components/InputSliderComponent'
import { ButtonActionAllWidth }             from '../components/buttonActionAllWidth'
import { ButtonsActionEnd }                 from '../components/buttonsActionEnd'
import { InputActionEdit }                  from '../components/inputActionEdit'
import { InputSelectListEnvelopeComponent } from '../components/inputSelectListEnvelopeComponent'
import { InputSelectListItemComponent }     from '../components/inputSelectListItemComponent'
import { ModalItemBacklog }                 from '../components/modalItemBacklog'
import { ModalRenderListY }                 from '../components/modalRenderListY'
import { ModalSettingEmployeeAddHeader }    from '../components/modalSettingEmployeeAddHeader'
import                                           '../style/userProfileView.css'

export function UserProfileView(){
    return(<>
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
                        <SettingsGroup label={'Perfíl'}>
                            <SettingsListGroup label={'Editar perfíl'}>
                                <SettingsListItem label={'reestablecer nombre de usuario'}/>
                            </SettingsListGroup>
                        </SettingsGroup>
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
            {/* <ModalExtendComponent label={'EDITAR PERFÍL'}>
                <ModalSettingEmployeeAddHeader>
                    <InputActionEdit buttonLabel={'Editar...'}  backColor={'#B1C1FD'} letterColor={'#26387A'} title={'REASIGNAR NOMBRE DE USUARIO'}/>
                    <InputActionEdit buttonLabel={'Editar...'}  backColor={'#B1C1FD'} letterColor={'#26387A'} title={'REASIGNAR CONTRASEÑA'}/>
                    <InputActionEdit buttonLabel={'Editar...'}  backColor={'#B1C1FD'} letterColor={'#26387A'} title={'REASIGNAR DESCRIPCIÓN DE PERFÍL'}/>
                    <InputActionEdit buttonLabel={'Editar...'}  backColor={'#B1C1FD'} letterColor={'#26387A'} title={'REASIGNAR TIPO DE DOCUMENTO '}/>
                    <InputActionEdit buttonLabel={'Editar...'}  backColor={'#B1C1FD'} letterColor={'#26387A'} title={'REASIGNAR TIPO DE PERFIL'}/>
                    <>
                        <InputBarComponent title={'REASIGNAR NOMBRE DE USUARIO'} placeholder={'NOMBRE DE USUARIO'} inputType={'text'} />
                        <InputBarComponent title={'REASIGNAR CONTRASEÑA'} placeholder={'CONTRASEÑA'} inputType={'password'}/>
                        <InputBarComponent title={'CONFIRMAR CONTRASEÑA'} placeholder={'CONTRASEÑA'} inputType={'password'}/>
                        <InputBarComponent title={'REASIGNAR DESCIPCIÓN DE PERFÍL'} placeholder={'DESCRIPCION DE PERFIL'} inputType={'text'}/>
                        <InputSelectListEnvelopeComponent title={'SELECCIONE EL TIPO DE DOCUMENTo'}>
                            <InputSelectListItemComponent label={'CEDULA DE CIUDADANIA'}/>
                            <InputSelectListItemComponent label={'DOCUMENTO DE RESIDENCIA'}/>
                        </InputSelectListEnvelopeComponent>
                        <InputSelectListEnvelopeComponent title={'SELECCIONE EL TIPO DE PERFÍL'}>
                            <InputSelectListItemComponent label={'ADMINISTRADOR'}/>
                            <InputSelectListItemComponent label={'ADMINISTRADOR DE PROCESOS'}/>
                            <InputSelectListItemComponent label={'OPERARIO DE PLANTA'}/>
                            <InputSelectListItemComponent label={'OPERARIO DE BODEGA'}/>
                            <InputSelectListItemComponent label={'INVITADO'}/>
                        </InputSelectListEnvelopeComponent> 
                         <InputSliderComponent title={'DESHABILITAR USUARIO'}/>
                    </>
                </ModalSettingEmployeeAddHeader >
                <ButtonActionAllWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'GUARDAR CAMBIOS'}/>
            </ModalExtendComponent> */}
            {/* <ModalExtendComponent label={'HISTORIAL'}>
                <ModalSettingEmployeeAddHeader>
                    <InputSelectListEnvelopeComponent title={'FILTRAR HISTORIAL POR'}>
                        <InputSelectListItemComponent label={'TODO'}/>
                        <InputSelectListItemComponent label={'OCR'}/>
                        <InputSelectListItemComponent label={'OP'}/>
                        <InputSelectListItemComponent label={'MÓDULO'}/>
                        <InputSelectListItemComponent label={'ADMINISTRATIVO'}/>
                    </InputSelectListEnvelopeComponent>
                </ModalSettingEmployeeAddHeader>
                <ModalRenderListY>
                    <ModalItemBacklog>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                    </ModalItemBacklog>
                </ModalRenderListY>
            </ModalExtendComponent> */}
            {/* <ModalExtendComponent label={'INFORMACIÓN DE REGISTRO'}>
                <InfoModalHeader 
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#26387A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                }
                >
                    <ModalOpHeaderItem label1={'OP'} label2={'REFERENCIA'} content1={'3548'} content2={'MAR8532'} color={'#26387A'}/>
                    <ModalOpHeaderItem label1={'MODULO'} label2={'COLOR'} content1={'12'} content2={'PIEL'} color={'#26387A'}/>
                    <ModalOpHeaderItem label1={'FECHA'} label2={'REG. POR'} content1={'21/06/2023'} content2={'1146441925'} color={'#26387A'}/>
                </InfoModalHeader>
                <InfoModalMain>
                    <InfoModalRow/>
                    <InfoModalRow/>
                    <InfoModalRow/>
                    <InfoModalRow/>
                    <InfoModalRow/>
                    <InfoModalRow/>
                    <InfoModalRow/>
                </InfoModalMain>
                <ModalEnvelope>
                    <ModalOpHeaderItem label1={'OP'} label2={'REFERENCIA'} content1={'3548'} content2={'MAR8532'} color={'#26387A'}/>
                    <ModalOpHeaderItem label1={'OP'} label2={'REFERENCIA'} content1={'3548'} content2={'MAR8532'} color={'#26387A'}/>
                </ModalEnvelope>
            </ModalExtendComponent> */}
        </>
    )
}