import { useState } from "react";
import './Client.css'

function NewCLient() {
    const [clicked, setClicked] = useState(false);
   /*FALATA CRIA A CONST DE CRIAR USER*/

    return (
        <div className="client">
            <h1>Novo Cliente</h1>
            
            <input type="name" placeholder="Nome:" name="" id="1" className="input"/>
            <input type="email" placeholder="Email:" name="" id="2" className="input"/>
            <input type="text" placeholder="Data de nascimento:" name="" id="3" className="input"/>
            <input type="tel" placeholder="Celular:" name="" id="4" className="input"/>
            <div className="select">
                <select>
                    <option value="" disabled selected>Selecione seu gênero</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>  
            </div>         
            <div className="buttons">
                <button onClick={()=>{
                    setClicked(true);
                    /*AQUI FALTA A PARTE DE SALVAR*/
                }} id="bSave">Salvar</button>
                <button onClick={()=>{
                    setClicked(true);
                    /*AQUI FALTA A PARTE DE SALVAR*/
                }} id="bCancel">Cancelar</button>
            </div>
        </div>
    )
}
export default NewCLient;