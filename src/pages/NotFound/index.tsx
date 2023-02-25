import Button from "componentes/Button";
import Title from "componentes/Title";
import { useNavigate } from "react-router-dom"
import styles from './NotFound.module.css'

function NotFound(){
    const navigate = useNavigate();
    return(
        <div className={styles.container}>

            <span className={styles.span404}>404</span>

            <Title>
                Ops!Página não encontrada
            </Title>
           

            <div className={styles.divButton} onClick={() => navigate(-1)}>
                <Button>
                    Voltar
                </Button>
            </div>

        </div>
    )
}

export default NotFound