import '../style/boardTargetModuloItems.css';

export function BoardTargetModuloItems(){
    return(
        <div className="board-target-modulo-items-container">
            <div className="board-target-modulo-items-frame">
                <div className="board-target-modulo-items-element-container">
                    <span>Módulo</span>
                </div>
                <div className="board-target-modulo-items-element-container">
                    <span>Planeado</span>
                </div>
                <div className="board-target-modulo-items-element-container">
                    <span>Ejecutado</span>
                </div>
                <div className="board-target-modulo-items-element-container">
                    <span>Eficiencia</span>
                </div>
                <div className="board-target-modulo-items-element-container">
                    <span>Operarios</span>
                </div>
            </div>
        </div>
    )
}