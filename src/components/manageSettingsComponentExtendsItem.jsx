import '../style/manageSettingsComponentExtendsItem.css'

export function ManageSettingsComponentExtendsItem({label,type}){
    return(
        <div className="manage-settings-component-extend-item-container">
            <div className="manage-settings-component-extend-item-label-container">
                <label htmlFor="">{label}</label>
            </div>
            <div className="manage-settings-component-extend-item-input-container">
                <input type={type} id='manage-settings-component-extend-item-input' placeholder={label}/>
            </div>
        </div>
    )
}