import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedLoginRoute = ({ children }) => {
  const { user } = useSelector(store => store.user);

  if (user) {
    return <Navigate to="/admin-dashboard" />;
  }

  return children;
};

export default ProtectedLoginRoute;
