import '../style/ocrMainComponent.css'

export function OcrMainComponent(){
    return(
        <div className="ocr-main-component-container">
            <div className="ocr-main-component-header-container">
                <div className="ocr-main-component-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#26387A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div className="ocr-main-component-information-container">
                    <div className="ocr-main-component-info">
                        <span>MOP4055</span>
                    </div>
                    <div className="ocr-main-component-info">
                        <span>2023-11-24</span>
                    </div>
                </div>
            </div>
            <div className="ocr-main-component-body-container">
                <div className="ocr-main-component-row-container">
                    <div className="ocr-main-component-title-container">
                        <span>Color:</span>
                    </div>
                    <div className="ocr-main-component-content-container">
                        <span>Piel</span>
                    </div>
                </div>
                <div className="ocr-main-component-row-container">
                    <div className="ocr-main-component-title-container">
                        <span>Módulo</span>
                    </div>
                    <div className="ocr-main-component-content-container">
                        <span>3</span>
                    </div>
                </div>
                <div className="ocr-main-component-row-container">
                    <div className="ocr-main-component-title-container">
                        <span>Hora-I</span>
                    </div>
                    <div className="ocr-main-component-content-container">
                        <span>10:25:11</span>
                    </div>
                </div>
                <div className="ocr-main-component-row-container">
                    <div className="ocr-main-component-title-container">
                        <span>Hora-F</span>
                    </div>
                    <div className="ocr-main-component-content-container">
                        <span>11:23:45</span>
                    </div>
                </div>
            </div>
        </div>
    )
}