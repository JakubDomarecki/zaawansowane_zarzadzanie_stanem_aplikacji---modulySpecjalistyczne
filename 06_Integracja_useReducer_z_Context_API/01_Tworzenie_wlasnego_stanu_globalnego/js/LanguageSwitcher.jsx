import { useUserPreferencesContext } from "./PreferencesContext";

export const LanguageSwitcher = () => {

  const {handleNewLanguage, language} = useUserPreferencesContext();

  return (
    <div>
      <h2>Language</h2>
      <select value={language} onChange={handleNewLanguage}>
        <option value="en" name="en">English</option>
        <option value="es" name="es">Spanish</option>
        <option value="fr" name="fr">French</option>
        <option value="de" name="de">German</option>
      </select>
    </div>
  );
};
