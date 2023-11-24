import '../style/vistaPrincipal.css'
import {NavComponent} from '../components/navComponent'
import { HeaderComponent } from '../components/headerComponet'
import { MainBodyComponent} from '../components/mainBodyComponent'

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
        </div>
    )
}