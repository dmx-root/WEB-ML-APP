import '../style/vistaPrincipal.css'
import {NavComponent} from '../components/NavComponent'

export function MainView(){
    return(
        <div className="main-view-container">
            <div className="nav-container">
                <NavComponent/>
            </div>
            <div className="root">
                <div className="header-container"></div>
                <div className="body-container"></div>
            </div>
        </div>
    )
}