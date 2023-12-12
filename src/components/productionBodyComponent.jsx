import '../style/productionBodyComponent.css'
import { BoardTargetComponent }             from './boardTargetComponent'
import { BoardTargetListEnvelopeX }         from './boardTargetListEnvelopeX'
import { BoardTargetListEnvelopeY }         from './boardTargetListEnvelopeY'
import { BoardTargetModuloAnalitycs }       from './boardTargetModuloAnalitycs'
import { BoardTargetModuloItems }           from './boardTargetModuloItems'
import { BoardTargetOcrItems }              from './boardTargetOcrItems'
import { BoardTargetOpAnalitycs }           from './boardTargetOpAnalitycs'
import { BoardTargetOpItems }               from './boardTargetOpitems'
import { ModuloMainComponent }              from './moduloMainComponent'
import { OcrMainComponent }                 from './ocrMainComponent'
import { OpMainComponent }                  from './opMainComponent'

export function ProductionBodyComponent(){
    return(
        <main id="production-body-main-conatiner">
            <div className="production-body-component-container">
                <div className="production-body-component-fame">
                    <div className="production-body-component-section-1-container">
                        <BoardTargetComponent label={'Lista de OP'}>
                            <BoardTargetOpAnalitycs/>
                            <BoardTargetOpItems/>
                            <BoardTargetListEnvelopeY>
                                <OpMainComponent/>
                                <OpMainComponent/>
                                <OpMainComponent/>
                                <OpMainComponent/>
                                <OpMainComponent/>
                                <OpMainComponent/>
                            </BoardTargetListEnvelopeY>
                        </BoardTargetComponent>
                    </div>
                    <div className="production-body-component-section-2-container">
                        <BoardTargetComponent label={'Lista de Módulos'}>
                            <BoardTargetModuloAnalitycs/>
                            <BoardTargetModuloItems/>
                            <BoardTargetListEnvelopeY>
                                <ModuloMainComponent/>
                                <ModuloMainComponent/>
                                <ModuloMainComponent/>
                                <ModuloMainComponent/>
                                <ModuloMainComponent/>
                                <ModuloMainComponent/>
                            </BoardTargetListEnvelopeY>
                        </BoardTargetComponent>
                    </div>
                    <div className="production-body-component-section-3-container">
                        <div className="production-body-component-seccion-3-ocr-list-container">
                            <BoardTargetComponent label={'Lista de Registros de primera'}>
                                <BoardTargetOcrItems/>
                                <BoardTargetListEnvelopeX>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                </BoardTargetListEnvelopeX>
                            </BoardTargetComponent>    
                        </div>
                        <div className="production-body-component-seccion-3-users-list-container">
                            <BoardTargetComponent label={'Lista de Registros de segunda'}>
                                <BoardTargetOcrItems/>
                                <BoardTargetListEnvelopeX>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                </BoardTargetListEnvelopeX>
                            </BoardTargetComponent>    
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}