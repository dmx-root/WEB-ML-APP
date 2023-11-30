import '../style/boardTargetOpItems.css';
export function BoardTargetOpItems(){
    return(
        <div className="board-target-op-items-container">
            <div className="board-target-items-op-frame">
                <div className="board-target-op-items-element-container">
                    <span>OP</span>
                </div>
                <div className="board-target-op-items-element-container">
                    <span>Planeado</span>
                </div>
                <div className="board-target-op-items-element-container">
                    <span>Ejecutado</span>
                </div>
                <div className="board-target-op-items-element-container">
                    <span>Sin Ejecutar</span>
                </div>
                <div className="board-target-op-items-element-container">
                    <span>Referencia</span>
                </div>
            </div>
        </div>
    )
}