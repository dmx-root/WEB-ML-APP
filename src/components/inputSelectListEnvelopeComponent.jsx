import '../style/inputSelectListEnvelopeComponent.css';

export function InputSelectListEnvelopeComponent({children,title}){
    return(
        <div className="input-select-list-envelope-component-container">
            <div className="input-select-list-envelope-component-row-container">
                <div className="input-select-list-envelope-component-row-column-container input-select-list-envelope-component-title">
                    <span>{title}</span>
                </div>
                <div className="input-select-list-envelope-component-row-column-container input-select-list-envelope-component-content">
                    <select>
                        {children}
                    </select>
                    <i></i>
                </div>
            </div>
        </div>
    )
}