import '../style/authForm.css';

export function AuthForm({children}){
    return(
        <div className="auth-form-container">
            <form action="" id='form'>
                {children}
            </form>
        </div>
    )
}