import '../style/vistaPrincipal.css'
import {NavComponent} from '../components/navComponent'
import { HeaderComponent } from '../components/headerComponet'
import { MainBodyComponent} from '../components/mainBodyComponent'
import { ModalExtendComponent } from '../components/modalExtendComponent'
import { ModalOpHeader } from '../components/modalOpHeader'
import { RenderListEnvelope } from '../components/renderListEnvelope'
import { OpMainComponent } from '../components/opMainComponent'
import { ManageSettingsComponentExtends } from '../components/manageSettingsComponentExtends'
import { ManageSettingsComponentExtendsItem } from '../components/manageSettingsComponentExtendsItem'
import { ModalOpHeaderItem } from '../components/modalOpHeaderItem'

export function MainView(){
    return(
        <div className="main-view-container">
            <div className="nav-container">
                <NavComponent/>
            </div>
            <div className="root">
                <div className="header-container">
                    <HeaderComponent/>
                </div>
                <div className="body-container">
                    <MainBodyComponent/>
                </div>
            </div>
            {/* <ModalExtendComponent label={'lista de ops'}>
                {
                    <>
                        <ModalOpHeader/>
                        <ModalOpHeader/>
                    </>
                }
            </ModalExtendComponent> */}
            <ModalExtendComponent label={'Lista de usuarios deshabilitados'}>
                {
                    <>
                        <ModalOpHeader>
                            <ModalOpHeaderItem label1={'OP'} content1={'MOB3547'} label2={'Módulo'} content2={'5'}/>
                            <ModalOpHeaderItem label1={'Ejecutado'} content1={'1200'} label2={'Sin Ejec'} content2={'800'}/>
                            <ModalOpHeaderItem label1={'Ejecutado'} content1={'1200'} label2={'Sin Ejec'} content2={'800'}/>
                        </ModalOpHeader>
                        <RenderListEnvelope>
                            <OpMainComponent/>
                            <OpMainComponent/>
                            <OpMainComponent/>
                            <OpMainComponent/>
                            <OpMainComponent/>
                        </RenderListEnvelope>
                    </>
                }
            </ModalExtendComponent>
            {/* <ModalExtendComponent label={'Reestablecer contraseña'}>
                <ManageSettingsComponentExtends>
                    <ManageSettingsComponentExtendsItem label={'Ingrese el documento'} type={'document'}/>
                </ManageSettingsComponentExtends>
            </ModalExtendComponent> */}
            {/* <ModalExtendComponent label={'lista de OP'}>
                <ModalOpHeader>
                    <ModalOpHeaderItem label1={'OP'} content1={'MOB3547'} label2={'Módulo'} content2={'5'}/>
                    <ModalOpHeaderItem label1={'Ejecutado'} content1={'1200'} label2={'Sin Ejec'} content2={'800'}/>
                </ModalOpHeader>
            </ModalExtendComponent> */}
            {/* <ModalExtendComponent label={'Lista de usuarios deshabilitados'}>
                {
                    <>
                        <RenderListEnvelope>
                            <OpMainComponent/>
                            <OpMainComponent/>
                            <OpMainComponent/>
                            <OpMainComponent/>
                            <OpMainComponent/>
                        </RenderListEnvelope>
                    </>
                }
            </ModalExtendComponent> */}
        </div>
    )
}