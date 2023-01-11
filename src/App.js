import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login, ProtectedRoute } from './pages';
import { Dashboard, Header } from './components/dashboard';
import { useEffect } from 'react';

function App() {
  const { user } = useSelector(store => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/admin-dashboard');
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Header />} />
      </Route>
    </Routes>
  );
}

export default App;
