import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import SignIn from './SignIn';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <SignIn />;
}

export default ProtectedRoute;