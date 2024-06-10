import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, authenticationPath, outlet }) => {
  const location = useLocation();

  if (isAuthenticated) {
    return outlet;
  }

  return <Navigate to={authenticationPath} state={{ from: location }} />;
};

export default ProtectedRoute;
