import React from "react";
import { useLanguage } from "./LanguageProvider";


export const LanguageSwitcher = () => {

  const {language , handleLanguageChange} = useLanguage();

  return(
    <>
      <p>{language}</p>
      <button onClick={handleLanguageChange}>Language</button>
    </>
  );
};
