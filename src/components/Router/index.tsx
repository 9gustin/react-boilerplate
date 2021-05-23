import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './constants';

function Router() {
  return (
    <Suspense fallback="Cargando...">
      <BrowserRouter>
        <Switch>
          {ROUTES.map(({
            component, exact, name, path,
          }) => (
            <Route
              component={component}
              exact={exact}
              key={name}
              path={path}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Router;
