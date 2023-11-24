import '../style/groupListItemsOp.css'

export function GroupListItemsOP(){
    return(
    <div className="group-list-items-container">
        <div className="group-list-item">
            <span>Orden</span>
        </div>
        <div className="group-list-item">
            <span>Planeado</span>
        </div>
        <div className="group-list-item">
            <span>Ejecutado</span>
        </div>
        <div className="group-list-item">
            <span>Sin Ejecutar</span>
        </div>
        <div className="group-list-item">
            <span>Referencia</span>
        </div>
    </div>
    )
}