import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "./useAuth.ts";

const ProtectedRoute: React.FC = () => {
  const {user} = useAuth();

  return user ? (
    <div>
      <p>hey {user.given_name}</p>
    <Outlet />
    </div>
  ) : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
