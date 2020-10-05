import React from 'react';
import InitialRoutes from './initial.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const logged = true;

  return logged ? <AppRoutes /> : <InitialRoutes />;
};

export default Routes;
