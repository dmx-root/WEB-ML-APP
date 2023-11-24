import '../style/headerComponent.css'
import { HeaderItem } from './headerItem'

export function HeaderComponent(){
    return(
        <div className="header-component-container">
            <div className="header-nav-items-container">
                <HeaderItem/>
                <HeaderItem/>
                <HeaderItem/>
            </div>
            <div className="header-search-action-container">
              
            </div>
            <div className="header-media-action-container">
                
            </div>
        </div>
    )
}