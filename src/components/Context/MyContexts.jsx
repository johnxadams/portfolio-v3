import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <MyContext.Provider value={{ hamburger, setHamburger }}>
      {children}
    </MyContext.Provider>
  );
};
