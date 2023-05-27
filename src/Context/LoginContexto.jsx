import React from 'react';


export const LoginContexto = React.createContext({nome:"", email:"", id:""});


export function LoginProvider ({ children })  {
  const [user, setUser] = React.useState({nome:"", email:"", id:""});

  return (
    <LoginContexto.Provider value={{ user, setUser }}>
      {children}
    </LoginContexto.Provider>
  );
};