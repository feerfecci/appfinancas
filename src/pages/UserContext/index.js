import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const UserContext = createContext();

// Provedor do contexto
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); // Estado para armazenar o ID do usuário

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useUser = () => useContext(UserContext);