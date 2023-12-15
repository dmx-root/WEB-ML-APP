import { SettingsHeader }                   from '../components/settingsHeader';
import { SettingsAside }                    from '../components/settingsAside';
import { SettingsAsideItem }                from '../components/settingsAsideItem';
import { SettingsListEnvelope }             from '../components/settingsListEnvelope';
import { SettingsListGroup }                from '../components/settingsListGroup';
import { SettingsListItem }                 from '../components/settingsListItem';
import {useMenuSelection}                   from '../controllers/controllers';
import { ModalExtendComponent }             from '../components/modalExtendComponent';
import { ModalSettingEmployeeAddHeader }    from '../components/modalSettingEmployeeAddHeader';
import { InputBarComponent }                from '../components/InputBarComponent';
import { ModalSettingsEmployeeAddMain }     from '../components/modalSettingsEmployeeAddMain';
import { ButtonActionAllWidth }             from '../components/buttonActionAllWidth';
import { EmployeeMainComponent }            from '../components/employeeMainComponent';
import { ButtonActionEndWidth }             from '../components/buttonActionEndWidth';
import { SettingsGroup }                    from '../components/settingsGroup';
import { InputActionEdit }                  from '../components/inputActionEdit';
import { BoardTargetListEnvelopeY }         from '../components/boardTargetListEnvelopeY';
import { ModalRenderListY }                 from '../components/modalRenderListY';
import { AlertMainComponent }               from '../components/alertMainComponent';
import { UserInformationComponent }         from '../components/userInformationComponent';
import { ModuloInformationComponent }       from '../components/moduloInformationComponent';
import                                           '../style/settingsView.css';



class Modales{
    editarRegistro={
        modal:[
            <>
                <ModalSettingEmployeeAddHeader>
                <InputBarComponent title={'INGRESE EL ID DEL REGISTRO'} placeholder={'ID DEL REGISTRO'} inputType={'number'}/>
                </ModalSettingEmployeeAddHeader>
                <ButtonActionEndWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'CARGAR REGISTRO'}/>  
            </>
            ,
            <>
                <ModalSettingsEmployeeAddMain label={'REGISTRO'}>
                    <ModuloInformationComponent/>
                </ModalSettingsEmployeeAddMain>
                <ModalSettingEmployeeAddHeader>
                    <InputActionEdit title={'Reasignar módulo'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                    <InputActionEdit title={'Reasignar cantidad de unidades'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                    <InputActionEdit title={'Reasignar código de anormalidad'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                    <InputActionEdit title={'Reasignar categoria'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                </ModalSettingEmployeeAddHeader>
                <ButtonActionAllWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'GUARDAR INFORMATION'}/>  
            </>
            
        ]
    }
}

export class ModalInterface extends Modales{
    #object=<></>
    extendInterface(processesId){
        this.#object=<ModalExtendComponent>
                        {this[processesId].modal[1]}
                    </ModalExtendComponent>
    }
    openModal(processes){
        this.extendInterface(processes);
        return this.#object;
    }
    closeModal(){
        this.#object=<></>;
        return this.#object;
    }
}

const modal =new Modales();