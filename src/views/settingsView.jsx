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
import { ModalInterface } from '../modules/main';




export function SettingsView(){

    const {selectedItem,handleItemClick}=useMenuSelection('Cuenta');
    const modales=new ModalInterface();
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
                        <SettingsGroup label={'CUENTA'}>
                            <SettingsListGroup label={'ADMINISTRAR PERFILE'}>
                                <SettingsListItem label={'reestablecer nombre de usuario'}/>
                                <SettingsListItem label={'reestablecer descripcion'}/>
                                <SettingsListItem label={'reeestablecer tipo de documento'}/>
                            </SettingsListGroup>
                        </SettingsGroup>
                        <SettingsGroup label={'ADMINISTRAR'}>
                            <SettingsListGroup label={'USUARIOS'}>
                                <SettingsListItem label={'crear cuenta'}/>
                                <SettingsListItem label={'reestablecer nombre de usuario'}/>
                                <SettingsListItem label={'reestablecer descripcion'}/>
                                <SettingsListItem label={'reeestablecer tipo de documento'}/>
                                <SettingsListItem label={'reestablecer contraseña'}/>
                                <SettingsListItem label={'Ver Cuentas Habilidatas'}/>
                                <SettingsListItem label={'Ver Cuentas Deshabilitadas'}/>
                                <SettingsListItem label={'Habilitar Cuenta'}/>
                                <SettingsListItem label={'Deshabilar Cuenta'}/>
                                <SettingsListItem label={'Buscar Cuenta'}/>
                            </SettingsListGroup>
                            <SettingsListGroup label={'ITEMS'}>
                                <SettingsListItem label={'Agregar Módulo'}/>
                                <SettingsListItem label={'reestablecer nombre de modulo'}/>
                                <SettingsListItem label={'reestablecer numero de operarios del modulo'}/>
                                <SettingsListItem label={'reestablecer estado de operacion del modulo'}/>
                                <SettingsListItem label={'reestablecer numero de maquinas del modulo'}/>
                                <SettingsListItem label={'Ver Detalles de Modulós'}/>
                                <SettingsListItem label={'Ver Módulos Deshabilitado'}/>
                                <SettingsListItem label={'Agregar Color'}/>
                                <SettingsListItem label={'Editar Nombre de Color'}/>
                                <SettingsListItem label={'Ver Colores Disponibles'}/>
                                <SettingsListItem label={'Crear Talla'}/>
                                <SettingsListItem label={'Editar Talla'}/>
                                <SettingsListItem label={'Ver Tallas'}/>
                                <SettingsListItem label={'Ver Tallas Deshabilitadas'}/>
                                <SettingsListItem label={'Habilitar Talla'}/>
                                <SettingsListItem label={'Deshabilar Talla'}/>
                                <SettingsListItem label={'Agregar Código de Barras'}/>
                            </SettingsListGroup>
                        </SettingsGroup>
                        <SettingsGroup label={'ADMINISTRAR PROCESOS'}>
                            <SettingsListGroup label={'OCR'}>
                                <SettingsListItem label={'Crear OCR'}/>
                                <SettingsListItem label={'Eliminar OCR'}/>
                                <SettingsListItem label={'reasignar modulo de OCR'}/>
                                <SettingsListItem label={'reasignar cantidad de unidades de OCR'}/>
                                <SettingsListItem label={'reasignar codigo de anormalidades de OCR'}/>
                                <SettingsListItem label={'reasignar categoria de OCR'}/>
                                <SettingsListItem label={'Ver OCR'}/>
                                <SettingsListItem label={'Deshabilitar OCR'}/>
                                <SettingsListItem label={'Habilitar OCR'}/>
                                <SettingsListItem label={'Buscar OCR'}/>
                            </SettingsListGroup>
                            <SettingsListGroup label={'OP'}>
                                <SettingsListItem label={'Abrir OP'}/>
                                <SettingsListItem label={'Asignar fecha de ejecucion de OP'}/>
                                <SettingsListItem label={'Asignar fecha de ejecucion de detalle OP'}/>
                                <SettingsListItem label={'Eliminar OP'}/>
                                <SettingsListItem label={'Editar OP'}/>
                                <SettingsListItem label={'Editar detalle de OP'}/>
                                <SettingsListItem label={'Ver Todas las OP'}/>
                                <SettingsListItem label={'Ver OP Deshabilitadas'}/>
                                <SettingsListItem label={'Ver OP Habilitadas'}/>
                                <SettingsListItem label={'Habilitar OP'}/>
                                <SettingsListItem label={'Buscar OP'}/>
                            </SettingsListGroup>
                            <SettingsListGroup label={'OPERARIOS'}>
                                <SettingsListItem label={'Agregar Operario'}/>
                                <SettingsListItem label={'Eliminar Operario'}/>
                                <SettingsListItem label={'Editar Detalles de Operario'}/>
                                <SettingsListItem label={'Ver Todos los Operarios(a)'}/>
                                <SettingsListItem label={'Ver Operarios Deshabilitados'}/>
                                <SettingsListItem label={'Ver Operarios Habilitados'}/>
                                <SettingsListItem label={'Habilitar Operario'}/>
                                <SettingsListItem label={'Buscar Operario'}/>
                            </SettingsListGroup>
                        </SettingsGroup>
                    </SettingsListEnvelope>
                </div>
            </div>
            
            {/* <ModalExtendComponent label={'AGREGAR OPERARIO AL PROCESO'}>
                <ModalSettingEmployeeAddHeader>
                    <InputBarComponent title={'SOLICITAR OPERARIO'} placeholder={'CODIGO DE USUARIO'} inputType={'text'}/> 
                </ModalSettingEmployeeAddHeader>
                <ButtonActionEndWidth label={'BUSCAR'} backColor={'#26387A'} LetterColor={'#FFF'}/>
                <ModalSettingsEmployeeAddMain>
                    <EmployeeMainComponent/>   
                </ModalSettingsEmployeeAddMain>
                <ButtonActionAllWidth label={'AGREGAR USUARIO'} backColor={'#26387A'} LetterColor={'#FFF'}/>   
            </ModalExtendComponent> */}
            {/* <ModalExtendComponent label={'AGREGAR OPERARIO AL PROCESO'}>
                <ModalSettingEmployeeAddHeader>
                    <InputBarComponent title={'SOLICITAR OPERARIO'} placeholder={'CODIGO DE USUARIO'} inputType={'text'}/> 
                </ModalSettingEmployeeAddHeader>
                <ButtonActionEndWidth label={'BUSCAR'} backColor={'#26387A'} LetterColor={'#FFF'}/>
                <ModalSettingsEmployeeAddMain>
                <EmployeeMainComponent/>   
                </ModalSettingsEmployeeAddMain>
                <ButtonActionAllWidth label={'REMOVER USUARIO'} backColor={'#26387A'} LetterColor={'#FFF'}/>   
            </ModalExtendComponent> */}
            {/* <ModalExtendComponent label={'EDITAR OPERARIO'}>
                <ModalSettingEmployeeAddHeader>
                <InputBarComponent title={'INGRESE EL DOCUMENTO DEL OPERARIO'} placeholder={'DOCUMENTO'} inputType={'text'}/>
                </ModalSettingEmployeeAddHeader>
                <ModalSettingsEmployeeAddMain>
                <EmployeeMainComponent/>   
                </ModalSettingsEmployeeAddMain>
                <ModalSettingEmployeeAddHeader>
                <InputActionEdit buttonLabel={'EDITAR...'} title={'REASIGNAR NOMBRE DE OPERARIO'} backColor={'#B1C1FD'} letterColor={'#26387A'}/>
                <InputActionEdit buttonLabel={'EDITAR...'} title={'REASIGNAR CÓDIGO DE OPERARIO'} backColor={'#B1C1FD'} letterColor={'#26387A'}/>
                <InputActionEdit buttonLabel={'EDITAR...'} title={'REASIGNAR DESCRIPCIÓN DE OPERARIO'} backColor={'#B1C1FD'} letterColor={'#26387A'}/>
                </ModalSettingEmployeeAddHeader>
                <ButtonActionAllWidth label={'GUARDAR CAMBIOS'} backColor={'#26387A'} LetterColor={'#FFF'}/>   
            </ModalExtendComponent> */}
            {/* <ModalExtendComponent label={'LISTA DE OPERARIOS'}>
                <ModalSettingEmployeeAddHeader>
                <InputBarComponent title={'SOLICITAR OPERARIO'} placeholder={'CODIGO DE USUARIO'} inputType={'text'}/>
                </ModalSettingEmployeeAddHeader>
                <ModalRenderListY>
                <EmployeeMainComponent/>   
                    <EmployeeMainComponent/>   
                    <EmployeeMainComponent/>   
                    <EmployeeMainComponent/>   
                    <EmployeeMainComponent/>   
                    </ModalRenderListY>
                </ModalExtendComponent> */}
            {/* <AlertMainComponent tittle={'Alert'} content={'Hoaoajs a adj aj dajd jaksaoj a jsj ao a asoj jjj sdjdhs  sd sd hsdhshd s s dksd s s d hs'}>
                <ButtonActionEndWidth label={'OK'} backColor={'#26387A'} LetterColor={'#FFF'}/>
            </AlertMainComponent> */}
            <>
                {/* <ModalExtendComponent label={'CREAR CUENTA'}>
                    <ModalSettingEmployeeAddHeader>
                        <InputBarComponent title={'INGRESE EL DOCUMENTO DEL USUARIO'} placeholder={'DOCUMENTO'} inputType={'text'}/>
                        <InputBarComponent title={'ASIGNAR UN PERFÍL AL USUARIO'} placeholder={'PERFÍL'} inputType={'number'}/>
                    </ModalSettingEmployeeAddHeader>
                    <ButtonActionEndWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'CARGAR USUARIO'}/>  
                </ModalExtendComponent> */}
                {/* <ModalExtendComponent label={'VALIDACIÓN DE INFORMACIÓN'}>
                    <ModalSettingsEmployeeAddMain>
                    <UserInformationComponent/>   
                    </ModalSettingsEmployeeAddMain>
                    <ButtonActionAllWidth label={'CREAR PERFÍL'} backColor={'#26387A'} LetterColor={'#FFF'}/>   
                </ModalExtendComponent> */}
            </>
            <>
                {/* <ModalExtendComponent label={'SOLICITAR USUARIO PARA EDITAR'}>
                    <ModalSettingEmployeeAddHeader>
                        <InputBarComponent title={'INGRESE EL DOCUMENTO DEL USUARIO'} placeholder={'DOCUMENTO'} inputType={'text'}/>
                    </ModalSettingEmployeeAddHeader>
                    <ButtonActionEndWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'CARGAR USUARIO'}/> 
                    <>
                    <ModalSettingsEmployeeAddMain>
                    <UserInformationComponent/>   
                    </ModalSettingsEmployeeAddMain>
                    <ButtonActionAllWidth label={'EDITAR'} backColor={'#26387A'} LetterColor={'#FFF'}/>   
                    </> 
                </ModalExtendComponent> */}
                {/* <ModalExtendComponent label={'SOLICITAR USUARIO PARA EDITAR'}>
                    
                    <ModalSettingsEmployeeAddMain label={'USUARIO PARA EDITAR'}>
                        <UserInformationComponent/>   
                        </ModalSettingsEmployeeAddMain> 
                        <ModalSettingEmployeeAddHeader>
                        <InputActionEdit title={'Reasignar nombre de usuario'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                        <InputActionEdit title={'Reasignar tipo de perfíl'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                        <InputActionEdit title={'Reasignar contraseña'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                        <InputActionEdit title={'Reasignar descripción'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                        </ModalSettingEmployeeAddHeader>
                        <ButtonActionAllWidth label={'GUARDAR CAMBIOS'} backColor={'#26387A'} LetterColor={'#FFF'}/>   
                        
                    </ModalExtendComponent> */}
            </>
            {/* <ModalExtendComponent label={'LISTA DE USUARIOS'}>
                <ModalSettingEmployeeAddHeader>
                <InputBarComponent title={'INGRESE EL DOCUMENTO DEL USUARIO'} placeholder={'DOCUMENTO'} inputType={'text'}/>
                </ModalSettingEmployeeAddHeader>
                <ModalRenderListY>
                <UserInformationComponent/>
                <UserInformationComponent/>
                <UserInformationComponent/>
                <UserInformationComponent/>
                </ModalRenderListY>
            </ModalExtendComponent> */}
            {/* <ModalExtendComponent label={'CREAR MÓDULO'}>
                <ModalSettingEmployeeAddHeader>
                <InputBarComponent title={'INGRESE EL NÚMERO DEL MÓDULO'} placeholder={'MÓDULO'} inputType={'number'}/>
                <InputBarComponent title={'INGRESE EL NÚMERO DE MÁQUINAS'} placeholder={'NÚMERO DE MÁQUINAS'} inputType={'number'}/>
                </ModalSettingEmployeeAddHeader>
                <ModalSettingsEmployeeAddMain label={'DATOS OPCIONALES'}>
                <InputActionEdit title={'Ingresar el número de operarios'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                <InputActionEdit title={'Ingresar el estado de operación'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                <InputActionEdit title={'Ingresar la eficiencia del módulo'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                </ModalSettingsEmployeeAddMain>
                <ButtonActionAllWidth label={'CARGAR INFORMACIÓN'} backColor={'#26387A'} LetterColor={'#FFF'}/>   
                </ModalExtendComponent> */}
            <>
                {/* <ModalExtendComponent label={'EDITAR INFORMACIÓN DEL MÓDULO'}>
                    <ModalSettingEmployeeAddHeader>
                    <InputBarComponent title={'INGRESE EL NÚMERO DEL MÓDULO'} placeholder={'MÓDULO'} inputType={'number'}/>
                    </ModalSettingEmployeeAddHeader>
                    <ButtonActionEndWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'CARGAR MÓDULO'}/>  
                </ModalExtendComponent> */}

                {/* <ModalExtendComponent label={'EDITAR MÓDULO'}>

                    <ModalSettingsEmployeeAddMain label={'MÓDULO PARA EDITAR'}>
                    <ModuloInformationComponent/>
                    </ModalSettingsEmployeeAddMain>
                    <ModalSettingEmployeeAddHeader>
                    <InputActionEdit title={'Reasignar el número de operarios'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                    <InputActionEdit title={'Reasignar el estado de operación'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                    <InputActionEdit title={'Reasignar la eficiencia del módulo'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                    <InputActionEdit title={'Reasignar estado de actividad'} buttonLabel={'Editar...'} backColor={"#CCC"} letterColor={'#333'}/>
                    </ModalSettingEmployeeAddHeader>
                    <ButtonActionAllWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'GUARDAR INFORMACIÓN'}/>  
                </ModalExtendComponent> */}
            </>
            <>
                {/* <ModalExtendComponent label={'ELIMINAR REGISTRO'}>
                    <ModalSettingEmployeeAddHeader>
                    <InputBarComponent title={'INGRESE EL ID DEL REGISTRO'} placeholder={'ID DEL REGISTRO'} inputType={'number'}/>
                    </ModalSettingEmployeeAddHeader>
                    <ButtonActionEndWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'CARGAR REGISTRO'}/>  
                </ModalExtendComponent> */}
                {/* <ModalExtendComponent label={'VALIDAR INFORMACIÓN DE REGISTRO QUE SERÁ ELIMINADO'}>
                    <ModalSettingsEmployeeAddMain label={'REGISTRO'}>
                        <ModuloInformationComponent/>
                    </ModalSettingsEmployeeAddMain>
                    <ButtonActionAllWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'ELIMINAR REGISTRO'}/>  
                </ModalExtendComponent> */}
            </>
            <>
                {/* <ModalExtendComponent label={'EDITAR REGISTRO'}>
                    <ModalSettingEmployeeAddHeader>
                    <InputBarComponent title={'INGRESE EL ID DEL REGISTRO'} placeholder={'ID DEL REGISTRO'} inputType={'number'}/>
                    </ModalSettingEmployeeAddHeader>
                    <ButtonActionEndWidth backColor={'#26387A'} LetterColor={'#FFF'} label={'CARGAR REGISTRO'}/>  
                </ModalExtendComponent> */}
                {/* <ModalExtendComponent label={'VALIDAR INFORMACIÓN DE REGISTRO QUE SERÁ EDITADO'}>
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
                </ModalExtendComponent> */}
            </>
            {/* <ModalExtendComponent label={'LISTA DE MÓDULOS'}>
                <ModalSettingEmployeeAddHeader>
                    <InputBarComponent title={'FILTRAR POR:'} placeholder={'FILTRO'} inputType={'number'}/>
                </ModalSettingEmployeeAddHeader>
                <ModalRenderListY>
                    <ModuloInformationComponent/>
                    <ModuloInformationComponent/>
                    <ModuloInformationComponent/>
                    <ModuloInformationComponent/>
                    <ModuloInformationComponent/>
                    <ModuloInformationComponent/>
                </ModalRenderListY>
            </ModalExtendComponent> */}

        </div>
    )
}