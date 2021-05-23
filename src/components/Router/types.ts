import React from 'react';
import { RouteProps } from 'react-router-dom';

import PATHS from './paths';

interface Route {
  path?: PATHS;
  component?: React.LazyExoticComponent<React.FC<RouteProps>>;
  name?: string;
  exact?: boolean;
  isPrivate?: boolean;
}

export default Route;
