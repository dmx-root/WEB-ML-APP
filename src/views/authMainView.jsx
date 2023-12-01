import '../style/authMainView.css';
import { AuthButtonAction } from '../components/authButtonAction';
import { AuthForm } from '../components/authForm';
import { AuthHeader } from '../components/authHeader';
import { AuthInput } from '../components/authInput';
import { AuthSelectSection } from '../components/authSelectSection';

export function AuthMainView(){
    return(
        <div className="auth-main-view-container">
            <div className="auth-view-form-container">
                <div className="auth-view-form-action-container">
                     <div className="auth-view-form-action-frament-container">
                        <AuthForm>
                            {/* <AuthHeader/> */}
                            <div className="auth-view-form-action-label-login-container">
                                <h1>LOGIN</h1>
                            </div>
                            <AuthInput label={'DOCUMENTO'} type={'text'} placeholder={'Ingrese su documento'}/>
                            <AuthInput label={'CONTRASEÑA'} type={'password'} placeholder={'* * * * * * *'}/>
                            <AuthInput label={'CONTRASEÑA'} type={'password'} placeholder={'* * * * * * *'}/>
                            <AuthSelectSection/>
                            <AuthButtonAction/>
                        </AuthForm>
                     </div>
                </div>
                <div className="auth-view-form-media-container">
                   
                </div>
            </div>
        </div>
    )
}