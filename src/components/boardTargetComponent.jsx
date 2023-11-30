import '../style/boardTargetComponent.css';

export function BoardTargetComponent({children,label}){
    return(
        <div className="board-target-component-container">
            <div className="board-target-component-frame">
                <div className="board-target-component-title-label">
                    <span>
                        {label}
                    </span>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}