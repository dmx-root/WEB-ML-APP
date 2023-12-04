import '../style/settingsHeader.css';
import { HeaderMediaAction } from './headerMediaAction';
import { HeaderSearchBar } from './headerSearchBar';

export function SettingsHeader(){
    return(
        <header id='setting-header-header-container'>
            <div className="settings-header-empty">
                
            </div>
            <div className="header-search-action-container">
                <HeaderSearchBar/>
            </div>
            <div className="settigs-header-media-action-container">
                <HeaderMediaAction/>
            </div>
         
        </header>
    )
}