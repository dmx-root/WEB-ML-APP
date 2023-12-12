import { useState } from 'react'
import '../style/productionReviseAsideItem.css'

export function ProductionReviseAsideItem({label}){
    const [click, setClick] = useState(false);
    return(
        <ol id="production-revise-aside-item-ol-container" onClick={()=>setClick(!click)}>
            <div className="production-revise-aside-item-container"  style={click?{backgroundColor:'#FFF',color:"#121E84"}:{}} >
                <span>{label}</span>
            </div>
        </ol>
    )
}