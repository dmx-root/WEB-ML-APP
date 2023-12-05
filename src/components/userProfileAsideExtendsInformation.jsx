import '../style/userProfileAsideExtendsInformation.css';

export function UserProfileAsideExtendsInformation({children}){
    return(
        <div className="user-profile-aside-extend-information-container">
            <div className="user-profile-aside-extend-information-frame-container">
                <ol>
                    {children}
                </ol>
            </div>
        </div>
    )
}