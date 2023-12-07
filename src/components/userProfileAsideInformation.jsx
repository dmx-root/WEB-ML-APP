import '../style/userProfileAsideInformation.css';

export function UserProfileAsideInformation({children,name}){
    return(
        <div className="user-profile-aside-information-component-container">
            <div className="user-profile-aside-information-name-container">
                <h1>{name}</h1>
            </div>
            <div className="user-profile-aside-information-description-container">
                {children}
            </div>
        </div>
    )
}