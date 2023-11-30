import '../style/headerComponent.css'
import { HeaderItem } from './headerItem'
import { HeaderItemDespGroup } from './headerItemDespGroup'
import { HeaderListDespGroup } from './headerListDespGroup'
import { HeaderMediaAction } from './headerMediaAction'
import { HeaderSearchBar } from './headerSearchBar'

export function HeaderComponent(){
    return(
        <div className="header-component-container">
            <div className="header-nav-items-container">
                <div className='header-desp-conatiner'>
                    <HeaderItem leabel={'Módulos'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00000035" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </HeaderItem>
                    {/* <HeaderListDespGroup/> */}
                </div>
                <div className='header-desp-conatiner'>
                    <HeaderItem leabel={'Operarios'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00000035" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    </HeaderItem>
                </div>
                <div className='header-desp-conatiner'>
                    <HeaderItem leabel={'OP'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00000035" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                    </HeaderItem>
                    {/* <HeaderListDespGroup>
                        <HeaderItemDespGroup label={'Users'}/>
                        <HeaderItemDespGroup label={'Items'}/>
                        <HeaderItemDespGroup label={'modulos'}/>
                        <HeaderItemDespGroup label={'Op'}/>
                    </HeaderListDespGroup> */}
                </div>
            </div>
            <div className="header-search-action-container">
                <HeaderSearchBar/>
            </div>
            <div className="header-media-action-container">
                <HeaderMediaAction/>
            </div>
        </div>
    )
}