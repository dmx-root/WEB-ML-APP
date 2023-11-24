import '../style/groupList.css'

export function GroupList({children,title,list}){
    return(
        <div className="group-list-container">
            <div className="group-list-title-container">
                <span>{title}</span>
            </div>
            <div className="group-list-analitycs-container">
                {children.analitycs}
            </div>
            {children.items}
            <div className="group-list-body-container">
                <ol className="group-list-frame">
                    {children.render}
                </ol>
            </div>
        </div>
    )
}