import '../style/buttonActionAllWidth.css';

export function ButtonActionAllWidth({label,backColor,LetterColor}){
    return(
        <div className="button-action-all-width-container">
            <button style={{backgroundColor:backColor}}>
                <span style={{color:LetterColor}}>{label}</span>
            </button>
        </div>
    )
}