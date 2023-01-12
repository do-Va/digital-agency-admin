import { Routes, Route } from 'react-router-dom';
import { ProtectedLoginRoute, ProtectedDashboardRoute } from './pages';
import { Dashboard, Header, Hero } from './components/dashboard';
import Login from './components/login/Login';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedLoginRoute>
            <Login />
          </ProtectedLoginRoute>
        }
      />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedDashboardRoute>
            <Dashboard />
          </ProtectedDashboardRoute>
        }
      >
        <Route index element={<Header />} />
        <Route path="hero" element={<Hero />} />
      </Route>
    </Routes>
  );
}

export default App;
