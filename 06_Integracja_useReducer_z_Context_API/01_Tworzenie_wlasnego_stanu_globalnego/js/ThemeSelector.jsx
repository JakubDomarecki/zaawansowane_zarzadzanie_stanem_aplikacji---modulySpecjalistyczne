import { useUserPreferencesContext } from "./PreferencesContext";

export const ThemeSelector = () => {

  const {theme, handleChangeThemeDark, handleChangeThemeLight} = useUserPreferencesContext();

  return (
    <div>
      <h2>Choose theme</h2>
      <button onClick={handleChangeThemeLight}>Light</button>
      <button onClick={handleChangeThemeDark}>Dark</button>
    </div>
  );
};
