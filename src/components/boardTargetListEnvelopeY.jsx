import '../style/boardTargetListEnvelopeY.css'

export function BoardTargetListEnvelopeY({children}){
    return(
        <div className="board-target-list-Envelope-y-container">
            <div className="board-target-list-Envelope-y-frame">
                <ul id='board-target-list-envelope-ul'>
                    {children}
                </ul>
            </div>
        </div>
    )
}