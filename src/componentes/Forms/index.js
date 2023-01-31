import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import ListaSuspensa from "../DropdownList";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          modify={(value) => setNome(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          modify={(value) => setCargo(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          modify={(value) => setImagem(value)}
        />
        <ListaSuspensa
          required={true}
          label="Time"
          itens={props.times}
          value={time}
          modify={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
