import '../style/inputSelectListItemComponent.css';

export function InputSelectListItemComponent({label,value}){
    return(
        <option value={value} id='input-select-item-component-option-container'>
            <div className="input-select-item-component-container">
                <div className="input-select-item-component-frame-container">
                    <span>{label}</span>
                </div>
            </div>
        </option>
    )
}