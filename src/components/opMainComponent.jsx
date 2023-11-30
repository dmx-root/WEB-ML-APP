import '../style/opMainComponent.css'

export function OpMainComponent(){
    return(
        <li id="op-main-component-li-container">
            <div className="op-main-component-container">
                <div className="op-main-component-icon-container">
                    <img src={require('../resources/images/base-de-datos.png')}/>
                </div>
                <div className="op-main-component-op-container">
                    <span>MOP3548</span>
                </div>
                <div className="op-main-component-reference-container">
                    <span>MAR8586</span>
                </div>
                <div className="op-main-component-ejecuted-container">
                    <span>1524</span>
                </div>
                <div className="op-main-component-not-ejecuted-container">
                    <span>1524</span>
                </div>
            </div>
        </li>
    )
}