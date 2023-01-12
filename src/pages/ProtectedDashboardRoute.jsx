import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedDashboardRoute = ({ children }) => {
  const { user, isLoading } = useSelector(store => store.user);

  if (isLoading) return <div>Loading</div>;

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedDashboardRoute;
