import Button from "componentes/Button";
import { useNavigate } from "react-router-dom"
import styles from './NotFound.module.css'

function NotFound(){
    const navigate = useNavigate();
    return(
        <div className={styles.container}>

            <span className={styles.span404}>404</span>

            <h2 className={styles.title}>Ops!Página não encontrada</h2>

            <div className={styles.divButton} onClick={() => navigate(-1)}>
                <Button>
                    Voltar
                </Button>
            </div>

        </div>
    )
}

export default NotFound