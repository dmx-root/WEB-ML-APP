import '../style/alertMainComponent.css';

export function AlertMainComponent({children,tittle,content}){
    return(
        <div className="alert-main-component-container">
            <div className="alert-main-component-window-container">
                <div className="alert-main-component-window-frame">
                    <div className="alert-main-component-window-tittle-container">
                        <h3>{tittle}</h3>
                    </div>
                    <div className="alert-main-component-window-content-container">
                        <p>{content}</p>
                    </div>
                    <div className="alert-main-component-window-extend-container">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}