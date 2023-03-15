import { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext();

function UserProvider({ children }) {

  const { register } = useAuth();

  return (
    <Context.Provider>
        
        {children}
    
  </Context.Provider>
  )
}
