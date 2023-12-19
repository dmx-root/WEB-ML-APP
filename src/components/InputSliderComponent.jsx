import '../style/inputSliderComponent.css';

export function InputSliderComponent({title}){
    return(
        <div className="input-slider-component-container">
            <div className="input-slider-component-row-container">
                <div className="input-slider-component-row-column-container input-slider-component-title">
                    <span>{title}</span>
                </div>
                <div className="input-slider-component-row-column-container input-slider-component-content">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}