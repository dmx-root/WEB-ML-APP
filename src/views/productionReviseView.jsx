import { BoardTargetListEnvelopeY } from '../components/boardTargetListEnvelopeY'
import { BoardTargetModuloItems } from '../components/boardTargetModuloItems'
import { MainBodyComponent } from '../components/mainBodyComponent'
import { ModaEventReviseProductionHeader } from '../components/modaEventReviseProductionHeader'
import { ModalEventReviseProductionMain } from '../components/modaEventReviseProductionMain'
import { ModalExtendComponent } from '../components/modalExtendComponent'
import { ModalModulosHeader } from '../components/modalModulosHeader'
import { ModalOpHeader } from '../components/modalOpHeader'
import { ModalOpHeaderItem } from '../components/modalOpHeaderItem'
import { ModuloMainComponent } from '../components/moduloMainComponent'
import { NavComponent } from '../components/navComponent'
import { ProductionBodyComponent } from '../components/productionBodyComponent'
import { SettingsHeader } from '../components/settingsHeader'
import '../style/productionReviseView.css'

export function ProductionReviseView(){
    return(
        <div className="production-revise-view-container" style={{background:'#FFF',color:"#121E84"}}>
            <div className="production-revise-view-nav-container">
                <NavComponent/>
            </div>
            <div className="production-revise-view-body-container">
                <div className="production-revise-view-body-header-conatiner">
                    <SettingsHeader/>
                </div>
                <div className="production-revise-view-body-main-container">
                   <ProductionBodyComponent/>
                </div>
            </div>
            {/* <ModalExtendComponent label={'Lista de OP'}>
                <ModalOpHeader>
                    <ModalOpHeaderItem label1={'OP'} content1={'MOB3547'} label2={'Módulo'} content2={'5'}/>
                    <ModalOpHeaderItem label1={'Ejecutado'} content1={'1200'} label2={'Sin Ejec'} content2={'800'}/>
                    <ModalOpHeaderItem label1={'Ejecutado'} content1={'1200'} label2={'Sin Ejec'} content2={'800'}/>
                    <ModalOpHeaderItem label1={'Ejecutado'} content1={'1200'} label2={'Sin Ejec'} content2={'800'}/>
                </ModalOpHeader>
            </ModalExtendComponent>  */}

            {/* <ModalExtendComponent label={'LISTA DE REGISTROS'}>
                <ModalModulosHeader/>
                <BoardTargetModuloItems/>
                <BoardTargetListEnvelopeY>
                    <ModuloMainComponent/>
                    <ModuloMainComponent/>
                    <ModuloMainComponent/>
                    <ModuloMainComponent/>
                    <ModuloMainComponent/>
                    <ModuloMainComponent/>
                    <ModuloMainComponent/>
                    <ModuloMainComponent/>
                </BoardTargetListEnvelopeY>
            </ModalExtendComponent> */}

            <ModalExtendComponent label={'REVISiÓN DE UNIDADES'}>
                <ModaEventReviseProductionHeader/>
                <ModalEventReviseProductionMain/>
            </ModalExtendComponent>
        
        </div>
    )
}