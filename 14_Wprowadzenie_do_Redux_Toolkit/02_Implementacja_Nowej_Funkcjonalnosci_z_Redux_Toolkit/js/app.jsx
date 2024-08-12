import React from 'react';
import { createRoot } from 'react-dom/client';
import { NotificationsPanel } from './NotificationsPanel';
import { Provider } from 'react-redux';
import store from './Redux/store';
const App = () => {

    return(
        <Provider store={store}>
            <NotificationsPanel />
        </Provider>
    )

};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
