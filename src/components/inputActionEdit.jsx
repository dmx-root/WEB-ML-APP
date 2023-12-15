import '../style/inputActionEdit.css';

export function InputActionEdit({title,buttonLabel,backColor,letterColor}){
    return(
        <div className="input-action-edit-container">
            <div className="input-action-edit-row-container">
                <div className="input-action-edit-row-column-container input-action-edit-title">
                    <span>{title}</span>
                </div>
                <div className="input-action-edit-row-column-container input-action-edit-content">
                    <button style={{backgroundColor:backColor,color:letterColor}}>
                        <span>{buttonLabel}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}