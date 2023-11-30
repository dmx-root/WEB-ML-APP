import { BoardTargetComponent }         from './boardTargetComponent'
import { BoardTargetListEnvelopeY }     from './boardTargetListEnvelopeY'
import { BoardTargetModuloAnalitycs }   from './boardTargetModuloAnalitycs'
import { BoardTargetModuloItems }       from './boardTargetModuloItems'
import { BoardTargetOcrItems }          from './boardTargetOcrItems'
import { OpMainComponent }              from './opMainComponent'
import { BoardTargetOpItems }           from './boardTargetOpitems'
import { BoardTargetOpAnalitycs }       from './boardTargetOpAnalitycs'
import { ModuloMainComponent }          from './moduloMainComponent'
import { BoardTargetListEnvelopeX }     from './boardTargetListEnvelopeX'
import { OcrMainComponent }             from './ocrMainComponent'
import '../style/mainBodyComponent.css'
import { UserMainComponent } from './userMainComponent'

export function MainBodyComponent(){
    return(
        <main id="body-main-conatiner">
            <div className="body-component-container">
                <div className="body-component-fame">
                    <div className="body-component-section-1-container">
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
                    <div className="body-component-section-2-container">
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
                                <ModuloMainComponent/>
                                <ModuloMainComponent/>
                            </BoardTargetListEnvelopeY>
                        </BoardTargetComponent>
                    </div>
                    <div className="body-component-section-3-container">
                        <div className="body-component-seccion-3-ocr-list-container">
                            <BoardTargetComponent label={'Lista de Registros'}>
                                <BoardTargetOcrItems/>
                                <BoardTargetListEnvelopeX>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                    <OcrMainComponent/>
                                </BoardTargetListEnvelopeX>
                            </BoardTargetComponent>
                        </div>
                        <div className="body-component-seccion-3-users-list-container">
                            <BoardTargetComponent label={'Lista de Usuarios'}>
                                <BoardTargetOcrItems/>
                                <BoardTargetListEnvelopeX>
                                    <UserMainComponent/>
                                    <UserMainComponent/>
                                    <UserMainComponent/>
                                    <UserMainComponent/>
                                </BoardTargetListEnvelopeX>
                            </BoardTargetComponent>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}