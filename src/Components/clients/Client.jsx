import './Client.css'
import { Navigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

function Client() {
  const [clicked, setClicked] = useState(false);
  const [clients, setClients] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/clients')
      .then(response => setClients(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='clientList'>
      <div className='tabela'>
          <table>
            <thead>
              <tr className='itemList'>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Gênero</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              { clients && clients.map(client => (
                <tr className='itemList' key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.age}</td>
                  <td>{client.gender}</td>
                  <td>{client.telephone}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

    <div className="buttons">
      <button onClick={() => {
        setClicked(true);
      }} id="bNewCliente">Novo Cliente</button>
      {clicked && <Navigate replace to="/clients/new"/>}
    </div>
    </div>
  )
}

export default Client;
