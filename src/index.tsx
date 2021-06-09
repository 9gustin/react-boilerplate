import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages';
import 'config/i18n';

import * as sw from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

sw.register();
