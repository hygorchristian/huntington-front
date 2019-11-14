import React from 'react';
import Dashboard from '../../screens/Dashboard';
import PrivateRoute from '../PrivateRoute';

function DashboardRoute({ component: Component, label, ...rest }) {
  return (
    <PrivateRoute
      {...rest}
      component={(prop) => (
        <Dashboard>
          <Component {...prop} label={label} />
        </Dashboard>
      )}
    />
  );
}

export default DashboardRoute;
