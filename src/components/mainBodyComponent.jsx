import '../style/mainBodyComponent.css'
import { GroupList } from './groupList'
import { GroupListItemsModulos } from './groupListItemsModulo'
import { GroupListItemsOP } from './groupListItemsOp'
import { OpMainComponent } from './opMainComponent'

export function MainBodyComponent(){
    return(
        <main id="body-main-conatiner">
            <div className="body-component-container">
                <div className="body-component-fame">
                    <div className="body-component-section-1-container">
                        <GroupList title={'Ordenes de producción'}>
                            {
                                {
                                    analitycs:<div>Analitycs Op</div>,
                                    items:<GroupListItemsOP/>,
                                    render:<OpMainComponent/>
                                }
                            }
                        </GroupList>
                    </div>
                    <div className="body-component-section-2-container">
                        <GroupList title={'Módulos'}>
                            {
                                {
                                    analitycs:<div>Analitycs Modulos</div>,
                                    items:<GroupListItemsModulos/> ,
                                    render:<div>lista de modulos</div>                               
                                }
                            }
                        </GroupList>
                    </div>
                    <div className="body-component-section-3-container">
                        <div className="body-component-seccion-3-ocr-list-container">
                            <GroupList title={'Registros'}>
                                {
                                    {
                                        analitycs:<div>Items</div>,
                                        items:<></>,
                                        render:<div>lista de ocr</div>                                
                                    }
                                }
                            </GroupList>
                        </div>
                        <div className="body-component-seccion-3-users-list-container">
                            <GroupList title={'Usuarios'}>
                                {
                                    {
                                        analitycs:<div>Items</div>,
                                        items:<></>,
                                        render:<div>lista de usuarios</div>                              
                                    }
                                }
                            </GroupList>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}