import { useTheme } from "./ThemeProvider";


export const ThemedComponent = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      Aktywny motyw: {theme}
      <button onClick={toggleTheme}>Zmień motyw</button>
    </div>
  );
};
