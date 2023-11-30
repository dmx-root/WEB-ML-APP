import '../style/boardTargetListEnvelopeX.css';

export function BoardTargetListEnvelopeX({children}){
    return(
        <div className="board-target-list-Envelope-x-container">
            <div className="board-target-list-Envelope-x-frame">
                <ul id='board-target-list-envelope-x-ul'>
                    {children}
                </ul>
            </div>
        </div>
    )
}