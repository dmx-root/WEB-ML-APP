import '../style/emptyInterfaceComponent.css';

export function EmptyInterfaceComponent({label}){
    return(
        <div className="empty-interface-component-container">
            <span>{label}</span>
        </div>
    )
}