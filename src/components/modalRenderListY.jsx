import '../style/modalRenderListY.css';

export function ModalRenderListY({children}){
    return(
        <div className="modal-render-list-y-container">
            <div className="modal-render-list-y-frame">
                <ol id="modal-render-list-y-li-container">
                    {children}
                </ol>    
            </div>
        </div>
    )
}