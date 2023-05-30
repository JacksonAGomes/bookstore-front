import { useState } from "react";
import './NewClient.css'
import { Navigate } from "react-router-dom"
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success('Cliente salvo com sucesso!', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      setTimeout(() => {
        setClicked(true);
      }, 2000);      })
      .catch(error => {
        toast.error('Erro, verifique os dados e tente novamente', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
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
      <input
        type="text"
        placeholder="Gênero:"
        name="gender"
        id="5"
        className="input"
        value={user.gender}
        onChange={e => setUser({ ...user, gender: e.target.value })}
      />

      <div className="buttons">
        <button onClick={saveUser} id="bSave">Salvar</button>
        <button onClick={() => setClicked(true)} id="bCancel">Cancelar</button>
      </div>

      {clicked && <Navigate replace to="/clients" />}

      <ToastContainer />
    </div>
  )
}

export default NewCLient;
