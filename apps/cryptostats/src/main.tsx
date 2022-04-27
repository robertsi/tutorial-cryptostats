import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { Provider } from 'react-redux';
import { store } from './store'
//import { AUTHAPI_FEATURE_KEY, authApiReducer } from './apis/auth-api.slice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);






root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
