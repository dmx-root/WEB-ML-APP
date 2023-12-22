import '../style/buttonsActionEnd.css';

export function ButtonsActionEnd({label1,backColor1,LetterColor1,label2,backColor2,LetterColor2}){
    return(
        <div className="buttons-action-end-container">
            <button style={{backgroundColor:backColor1}}>
                <span style={{color:LetterColor1}}>{label1}</span>
            </button>
            <button style={{backgroundColor:backColor2}}>
                <span style={{color:LetterColor2}}>{label2}</span>
            </button>
        </div>
    )
}