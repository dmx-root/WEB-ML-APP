import {NavItem} from '../components/navItem'
import '../style/navComponent.css'
import { MenuItemGroup } from './menuItemGroup'


export function NavComponent(){
    return(
        <div className="nav-component-container">
            <div className="media-container">

            </div>
            <div className="header-nav-container">

            </div>
            <div className="item-list-container">
                <ol id='ol-list-item-nav'>
                    <MenuItemGroup title={'Administrar '}>
                        <NavItem label={'user'}/>
                        <NavItem label={'modulos'}/>
                    </MenuItemGroup>

                    <MenuItemGroup title={'analitycs'}>
                        <NavItem label={'user'}/>
                        <NavItem label={'modulos'}/>
                        <NavItem label={'proce'}/>
                        <NavItem label={'proce'}/>
                        <NavItem label={'proce'}/>
                    </MenuItemGroup>
                </ol>
            </div>
        </div>
    )
}