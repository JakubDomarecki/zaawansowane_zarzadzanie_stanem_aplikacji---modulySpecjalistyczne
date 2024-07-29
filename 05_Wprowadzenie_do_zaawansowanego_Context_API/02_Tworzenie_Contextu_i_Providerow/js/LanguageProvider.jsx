import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('english')

  const handleLanguageChange = () => { 
    setLanguage(state => state === 'english' ? 'polish' : 'english')
  }

  return (
  <>
    <LanguageContext.Provider value={{language, handleLanguageChange}}>
      {children}
    </LanguageContext.Provider>
  </>
  )
};


export const useLanguage = () => useContext(LanguageContext);
