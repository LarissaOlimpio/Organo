import { ReactElement } from 'react'
import styles from './Button.module.css'

interface ButtonProps{
    children: ReactElement
}

const Button = ({children}:ButtonProps) => {
    return (
        <button className={styles.button}>
            {children}
        </button>)
}

export default Button