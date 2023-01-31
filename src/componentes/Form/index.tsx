import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import styles from "./Form.module.css";
import { ICollaborators } from "../../shared/interfaces/ICollaborators";

interface FormProps{
  registeredCollaborator: (colaborator :ICollaborators) => void
  times: string[]
}

const Formulario = ({registeredCollaborator,times}:FormProps) => {

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  const toSave = (event:React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    registeredCollaborator({
      name,
      position,
      image,
      time,
    });

    setName("");
    setPosition("");
    setImage("");
    setTime("");
  };

  return (
    <section className={styles.form}>
      <form onSubmit={toSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
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
        <DropdownList
          required={true}
          label="Time"
          itens={times}
          value={time}
          modify={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
