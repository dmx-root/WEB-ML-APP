import '../style/opGroupList.css'

export function OpGroupList(){
    return(
        <div className="op-group-list-container">
            <div className="op-group-list-title-container">
                <span>Ordenes de producción</span>
            </div>
            <div className="op-group-list-analitycs-container">
                <div className="op-group-list-analitycs-frame-container">
                    <div className="op-group-list-analitycs-conatiner-1"></div>
                    <div className="op-group-list-analitycs-conatiner-1"></div>
                </div>
            </div>
            <div className="op-group-list-items-container">
                <div className="op-group-list-item">
                    <span>Orden</span>
                </div>
                <div className="op-group-list-item">
                    <span>Planeado</span>
                </div>
                <div className="op-group-list-item">
                    <span>Ejecutado</span>
                </div>
                <div className="op-group-list-item">
                    <span>Sin Ejecutar</span>
                </div>
                <div className="op-group-list-item">
                    <span>Referencia</span>
                </div>
            </div>
            <div className="op-group-list-body-container">
                <div className="op-group-list-frame">

                </div>
            </div>
        </div>
    )
}