import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeSelector } from './ThemeSelector';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NotificationsToggler } from './NotificationsToggler';
import { UserPreferencesProvider } from './PreferencesContext';

const App = () => {
  return (
    <div>
      <h1>Settings</h1>
      <UserPreferencesProvider>
        <ThemeSelector />
        <LanguageSwitcher />
        <NotificationsToggler />
      </UserPreferencesProvider>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
