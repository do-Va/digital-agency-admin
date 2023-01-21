import { Routes, Route } from 'react-router-dom';
import { ProtectedLoginRoute, ProtectedDashboardRoute } from './pages';
import {
  About,
  Dashboard,
  Header,
  Hero,
  Service,
  OurTeam,
  OurWork,
} from './components/dashboard';
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
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="our-work" element={<OurWork />} />
      </Route>
    </Routes>
  );
}

export default App;
