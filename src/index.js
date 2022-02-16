// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react'
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
// contexts
import {SettingsProvider} from './contexts/SettingsContext';
import {CollapseDrawerProvider} from './contexts/CollapseDrawerContext';
//
import App from './App';
import {store, persistor} from "./redux/store";

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SettingsProvider>
          <CollapseDrawerProvider>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
          </CollapseDrawerProvider>
        </SettingsProvider>
      </PersistGate>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
);
