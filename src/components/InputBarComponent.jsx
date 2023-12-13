import '../style/InputBarComponent.css';

export function InputBarComponent({title,placeholder,inputType}){
    return(
        <div className="input-bar-component-container">
            <div className="input-bar-component-row-container">
                <div className="input-bar-component-row-column-container input-bar-component-title">
                    <span>{title}</span>
                </div>
                <div className="input-bar-component-row-column-container input-bar-component-content">
                    <input type={inputType} placeholder={placeholder}/>
                </div>
            </div>
        </div>
    )
}