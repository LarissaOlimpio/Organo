import styles from './TextField.module.css'

interface TextFieldProps{

    modify: (value: string) => void
    placeholder : string
    label: string
    value: string
    required?: boolean
    type?: 'text'|'password'|'date'|'email'|'number'

}
const TextField = ({label,modify,placeholder,value,required = false, type = 'text'}:TextFieldProps) => { 

    const typing = (event:React.ChangeEvent<HTMLInputElement>) => {
        modify(event.target.value)
    }

    return (
        <div className={styles.textField}>

            <label>
                {label}
            </label>

            <input 
                value={value} 
                onChange={typing} 
                required={required} 
                placeholder={placeholder}
                type={type}/>
        </div>
    )
}

export default TextField