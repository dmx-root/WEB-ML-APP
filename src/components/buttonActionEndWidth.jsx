import '../style/buttonActionEndWidth.css';

export function ButtonActionEndWidth({label,backColor,LetterColor}){
    return(
        <div className="button-action-end-width-container">
            <button style={{backgroundColor:backColor}}>
                <span style={{color:LetterColor}}>{label}</span>
            </button>
        </div>
    )
}