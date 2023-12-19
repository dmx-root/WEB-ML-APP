import '../style/opDetailInformationComponent.css';

export function OpDetailInformationComponent(){
    return(
        <li id="op-detail-information-component-li-container">
            <div className="op-detail-information-component-container">
                <div className="op-detail-information-component-icon-container">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                        <div className="op-detail-information-component-row-state-container">
                            <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle">
                                <span>ESTADO</span>
                            </div>
                            <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                                <span>Actiivo</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="op-detail-information-component-content-container">
                    <div className="op-detail-information-component-row-container">
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle op-detail-information-component-colunm-tittle-remake">
                            <span>OP</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>MOP3548</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle op-detail-information-component-colunm-tittle-remake">
                            <span>REFERENCIA</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>MAR8532</span>
                        </div>
                    </div>
                    <div className="op-detail-information-component-row-container">
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle op-detail-information-component-colunm-tittle-remake">
                            <span>COLOR</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>PIEL</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle op-detail-information-component-colunm-tittle-remake">
                            <span>TALLA</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>XL</span>
                        </div>
                    </div>
                    <div className="op-detail-information-component-row-container">
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle">
                            <span>INICIO PLAN.</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>18/12/2023</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle">
                            <span>FIN PLAN.</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>18/28/2023</span>
                        </div>
                    </div>
                    <div className="op-detail-information-component-row-container">
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle">
                            <span>INICIO EJEC.</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>18/12/2023</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle">
                            <span>FIN EJEC.</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>27/12/2023</span>
                        </div>
                    </div>
                    <div className="op-detail-information-component-row-container">
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle">
                            <span>CANT PLANE</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>1200</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-tittle">
                            <span>CANT EJEC</span>
                        </div>
                        <div className="op-detail-information-component-colunm-container op-detail-information-component-colunm-content">
                            <span>300</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}