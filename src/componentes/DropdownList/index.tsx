import styles from'./DropdownList.module.css'

interface DropdownListProps{
    label:string 
    modify:(value:string)=> void
    required?: boolean
    value:string
    itens: string[]
}
const DropdownList = ({label,modify,value,required,itens}:DropdownListProps) => {
    return (
        <div className={styles.dropdownList}>

            <label>{label}</label>

            <select onChange={evento => modify(evento.target.value)} 
            required={required} value={value}>

                <option value=""> </option>

                {itens.map(item => {
                    return <option key={item}> {item} </option>
                })}
                
            </select>
        </div>
    )
}

export default DropdownList