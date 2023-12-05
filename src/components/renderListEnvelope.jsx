import '../style/renderListEnvelope.css'

export function RenderListEnvelope({children}){
    return(
        <div className="user-list-envelope-container">
            <div className="user-list-envelope-frame-container">
                <ol>
                    {children}
                </ol>
            </div>
        </div>
    )
}