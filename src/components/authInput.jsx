import '../style/authInput.css';

export function AuthInput({label, type,placeholder}){
    return(
        <div className="auth-input-container">
            <div className="auth-input-form-action-fields-label-container">
                <label htmlFor="">{label}</label>
            </div>
            <div className="auth-input-form-action-fields-input-container">
                <input type={type}  placeholder={placeholder}/>
            </div>
        </div>
    )
}