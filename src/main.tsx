import * as React from 'react';
import { render } from 'react-dom';


import App from './App';
import AppState from './store';


const appState = new AppState();

const container = document.getElementById('react-app');


const renderApp = (TheApp: typeof App) =>
    render(
        <TheApp store={appState} />,
        container
    );

// if (DEV && module.hot) {
//   // Accept changes to this file for hot reloading.
//   module.hot.accept('./index');
//   // Any changes to our App will cause a hotload re-render.
//   module.hot.accept(
//     './components/App',
//     () => renderApp(require('./components/App').default),
//   );
// }

renderApp(App);