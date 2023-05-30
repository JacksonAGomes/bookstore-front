import { useState } from "react";
import './NewClient.css'
import { Navigate } from "react-router-dom"
import axios from "axios";

function NewCLient() {
  const [clicked, setClicked] = useState(false);
  const [user, setUser] = useState({
    name: "",
    age: "",
    telephone: "",
    email: "",
    gender: ""
  });

  const saveUser = () => {
    axios.post('http://localhost:8080/clients', user)
      .then(response => {
        console.log('Usuário salvo com sucesso:', response.data);
        setClicked(true);
      })
      .catch(error => {
        console.error('Erro ao salvar usuário:', error);
      });
  }

  return (
    <div className="client">
      <h1 id="nClient">Novo Cliente</h1>

      <input
        type="name"
        placeholder="Nome:"
        name="name"
        id="1"
        className="input"
        value={user.name}
        onChange={e => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email:"
        name="email"
        id="2"
        className="input"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="number"
        placeholder="Idade"
        name="age"
        id="3"
        className="input"
        value={user.age}
        onChange={e => setUser({ ...user, age: e.target.value })}
      />
      <input
        type="number"
        placeholder="Celular:"
        name="telephone"
        id="4"
        className="input"
        value={user.telephone}
        onChange={e => setUser({ ...user, telephone: e.target.value })}
      />
      <select
        className="input"
        value={user.gender}
        onChange={e => setUser({ ...user, gender: e.target.value })}
      >
        <option id='0' value='0' disabled selected>
          Selecione seu gênero
        </option>
        <option id='1' value="masculino">Masculino</option>
        <option id='2' value="feminino">Feminino</option>
        <option id='3' value="outro">Outro</option>
      </select>

      <div className="buttons">
        <button onClick={() => saveUser(user)} id="bSave">Salvar</button>
        <button onClick={() => setClicked(true)} id="bCancel">Cancelar</button>
      </div>

      {clicked && <Navigate replace to="/clients" />}
    </div>
  )
}

export default NewCLient;
