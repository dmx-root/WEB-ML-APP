import '../style/moduloMainComponent.css'

export function ModuloMainComponent(){
    return(
        <li id="modulo-main-component-li-container">
        <div className="modulo-main-component-container">
            <div className="modulo-main-component-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            </div>
            <div className="modulo-main-component-modulo-container">
                <span>12</span>
            </div>
            <div className="modulo-main-component-eficiencia-container">
                <span>78%</span>
            </div>
            <div className="modulo-main-component-ejecuted-container">
                <span>68</span>
            </div>
            <div className="modulo-main-component-not-ejecuted-container">
                <span>33</span>
            </div>
        </div>
    </li>
    )
}