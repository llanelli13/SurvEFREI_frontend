import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/" element={<Login />} />
        {/* Layout avec une structure de navigation pour les pages authentifiées */}
        <Route path="/home/*" element={<Layout />}>
          {/* Redirection par défaut vers le tableau de bord */}
          <Route index element={<Navigate to="dashboard" />} />
          <Route index element={<Navigate to="ProfilePage" />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="surveys" element={<div>Surveys Page</div>} />
          <Route path="profile" element={<ProfilePage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
