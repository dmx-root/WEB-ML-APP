import '../style/opMainComponent.css'

export function OpMainComponent(){
    return(
        <li id="op-main-component-li-container">
            <div className="op-main-component-container">
                <div className="op-main-component-icon-container"></div>
                <div className="op-main-component-op-container"></div>
                <div className="op-main-component-ejecuted-container"></div>
                <div className="op-main-component-not-ejecuted-container"></div>
                <div className="op-main-component-reference-container"></div>
            </div>
        </li>
    )
}