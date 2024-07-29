import { createContext, memo, useCallback, useContext, useMemo, useReducer } from 'react';
import { photos } from './data';
import { createRoot } from 'react-dom/client';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter((photo) => photo.id !== action.payload.id);
    default:
      return state;
  }
};

// Provider
export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  const toggleFavorite = useCallback(
    (photo) => {
      const isFavorite = favorites.some((fav) => fav.id === photo.id);
      dispatch({
        type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
        payload: photo,
      });
  },
  [favorites]
);

  // Uzupełnij kod i użyj useMemo
  const value = useMemo(() => ({favorites, toggleFavorite}), [favorites, toggleFavorite])

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

// Hook
export const useFavorites = () => useContext(FavoritesContext);

// Komponent galerii (do uzupełnienia przez kursanta)
const Gallery = () => {
  // [Twoje zadanie: Uzupełnij logikę wykorzystując `useFavorites` do wyświetlania ulubionych zdjęć]
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div>
      <h2>Ulubione Zdjęcia</h2>
      <div>
        {favorites.map((photo) => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title} style={{ width: '100px', height: '100px' }} />
            <button onClick={() => toggleFavorite(photo)}>Usuń z ulubionych</button>
          </div>
        ))}
      </div>
      <h2>Wszystkie Zdjęcia</h2>
      <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title} style={{ width: '100px', height: '100px' }} />
            <button onClick={() => toggleFavorite(photo)}>
              {favorites.some((fav) => fav.id === photo.id) ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

};

const App = () => {
  return (
    <FavoritesProvider>
      <Gallery />
    </FavoritesProvider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
