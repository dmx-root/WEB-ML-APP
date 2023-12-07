import '../style/userListComponent.css';

export function UserListComponent(){
    return(
        <div className="user-list-component-container">
            <div className="user-list-component-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div className="user-list-component-information-container">
                <div className="user-list-component-information-column-container">
                    <div className="user-list-component-information-row-conatiner">

                    </div>
                </div>
            </div>
        </div>
    )
}