import '../style/authHeader.css';

export function AuthHeader(){
    return(
        <div className="auth-header-container">
            <img src={require('../resources/images/logo-letter-blue.png')} alt="main-logo" />
        </div>
    )
}