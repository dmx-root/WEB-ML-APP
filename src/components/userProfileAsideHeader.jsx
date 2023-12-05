import '../style/userProfileAsideHeader.css'

export function UserProfileAsideHeader(){
    return(
        <div className="user-profile-aside-header-component-container">
            <div className="user-profile-aside-header-background-container"></div>
            <div className="user-profile-aside-header-board-container"></div>
            <div className="user-profile-aside-header-photo-container">
                <img src={require('../resources/images/photo-profile.jpg')} alt="profil-user-aside" />
            </div>
        </div>
    )
}