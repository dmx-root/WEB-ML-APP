import {NavItem} from './navItem'
import '../style/navComponent.css'
import { NavHeaderIcon} from './navHeaderIcon'
import { NavHeaderItem } from './navHeaderItem'
import { MenuItemGroup } from './menuItemGroup'


export function NavComponent(){
    return(
        <div className="nav-component-container">
            <div className="media-container">
                <NavHeaderIcon/>
            </div>
            <div className="header-nav-container">
                <ol id='ol-lis-header-item-nav'>
                    <NavHeaderItem label={'apps'}/>
                    <NavHeaderItem label={'analitycs'}/>
                </ol>
            </div>
            <div className="item-list-container">
                <ol id='ol-list-item-nav'>
                    <MenuItemGroup title={'Administrar '}>
                        <NavItem label={'user'}/>
                        <NavItem label={'modulos'}/>
                        <NavItem label={'perfiles'}/>
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