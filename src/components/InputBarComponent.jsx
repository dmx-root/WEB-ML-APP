import '../style/InputBarComponent.css';

export function InputBarComponent({title,placeholder,inputType,value,onChange}){
    return(
        <div className="input-bar-component-container">
            <div className="input-bar-component-row-container">
                <div className="input-bar-component-row-column-container input-bar-component-title">
                    <label>{title}</label>
                </div>
                <div className="input-bar-component-row-column-container input-bar-component-content">
                    <input type={inputType} placeholder={placeholder} value={value} onChange={onChange}/>
                </div>
            </div>
        </div>
    )
}