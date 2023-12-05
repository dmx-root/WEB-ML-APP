import '../style/userProfileAside.css';
import { NavItem } from './navItem';
import { SettingsListItem } from './settingsListItem';
import { UserProfileAsideExtendsInformation } from './userProfileAsideExtendsInformation';
import { UserProfileAsideHeader } from './userProfileAsideHeader';
import { UserProfileAsideInformation } from './userProfileAsideInformation';

export function UserProfileAside(){
    return(
        <div className="user-profile-aside-container">
            <div className="user-profile-aside-header-container">
                <UserProfileAsideHeader/>
            </div>
            <div className="user-profile-aside-information-container">
                <UserProfileAsideInformation name={'David Morales'} description={'Desarrollador Junior'}/>
            </div>
            <div className="user-profile-aside-extends-information-container">
                <UserProfileAsideExtendsInformation>
                    <>
                    
                       
                    </>
                </UserProfileAsideExtendsInformation>
            </div>
        </div>
    )

}