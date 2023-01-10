import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login, ProtectedRoute } from './pages';
import { Dashboard, Header } from './components/dashboard';
import { getCurrentUser } from './redux/user/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

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
