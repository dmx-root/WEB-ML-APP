import '../style/modalExtendComponent.css'

//este componente es resizeble lo que quiere decir que de la cantidad de elemente que extienda el modal
// este se adaptará al tamaño ideal 

export function ModalExtendComponent({children,label}){
    return(
        <div className="modal-extend-component-container">
            <div className="modal-extend-component-window">
                <div className="modal-extend-component-frame">
                    <div className="modal-extend-component-title-envelope">
                        <div className="modal-extend-component-title-label-envelope">
                            {label}
                        </div>
                        <div className="modal-extend-component-title-icon-envelope">
                            <div className="modal-extend-component-title-icon-frame">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00000070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                    <line x1="18" y1="6" x2="6" y2="18">
                                        </line><line x1="6" y1="6" x2="18" y2="18">
                                    </line>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}