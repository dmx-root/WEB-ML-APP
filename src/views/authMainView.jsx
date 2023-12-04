import { AuthButtonAction }     from '../components/authButtonAction';
import { AuthForm }             from '../components/authForm';
import { AuthHeader }           from '../components/authHeader';
import { AuthInput }            from '../components/authInput';
import { AuthSelectSection }    from '../components/authSelectSection';
import                               '../style/authMainView.css';

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
                            <AuthSelectSection/>
                            <AuthButtonAction/>
                        </AuthForm>
                     </div>
                </div>
                <div className="auth-view-form-media-container">
                    <div className="auth-view-form-media-img-container">
                        
                    </div>
                    <div className="auth-view-form-media-content-conteiner">
                        <div className="auth-view-form-media-content-logo-container">
                            <img src={require('../resources/images/tranparentLogo.png')} alt="log" />
                        </div>
                        <div className="auth-view-form-media-content-info-container">
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}