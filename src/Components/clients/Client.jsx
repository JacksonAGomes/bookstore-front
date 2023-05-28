import { useState } from "react";
import './Client.css'
import { Navigate } from "react-router-dom"

function Client() {
  const [clicked, setClicked] = useState(false);

    return (
            <div className="buttons">
                <button onClick={()=>{
                    setClicked(true);
                }} id="bSave">Novo Cliente</button>

                {
                  clicked &&  <Navigate replace to="/clients/new"/>     
                }
          </div>

          
    )
}
export default Client;