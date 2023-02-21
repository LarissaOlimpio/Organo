import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import styles from "./Form.module.css";
import { ICollaborators } from "shared/interfaces/ICollaborators";
import {v4 as uuidv4} from 'uuid'

interface FormProps{
  registeredCollaborator: (colaborator :ICollaborators) => void
  times: string[]
}

const Formulario = ({registeredCollaborator,times}:FormProps) => {

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const toSave = (event:React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    registeredCollaborator({
      name,
      position,
      image,
      time,
      date,
      id : uuidv4()
    });

    setName("");
    setPosition("");
    setImage("");
    setTime("");
    setDate("")
  };

  return (
    <section className={styles.containerForm}>
      <form className={styles.form} onSubmit={toSave}>
        <h2>Preencha os dados abaixo para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          modify={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={position}
          modify={(value) => setPosition(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          modify={(value) => setImage(value)}
        />
        <TextField 
          label="Data de entrada no time"
          placeholder=""
          value={date}
          modify={(value) => setDate(value)}
          type="date"
          />

        <DropdownList
          required={true}
          label="Time"
          itens={times}
          value={time}
          modify={(value) => setTime(value)}
        />
        <Button >Criar Card</Button>
      </form>
      
    </section>
   
  );
};

export default Formulario;
