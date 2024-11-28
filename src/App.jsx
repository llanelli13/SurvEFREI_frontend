import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ProfilePage from "./pages/Profile";
import Surveys from "./pages/Surveys";  // Importation de Surveys
import EvaluationForm from "./pages/EvaluationForm";  // Importation d'EvaluationForm

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
          
          {/* Route pour le tableau de bord */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* Route pour la page des professeurs */}
          <Route path="surveys" element={<Surveys />} />

          {/* Sous-route pour le formulaire d'évaluation d'un professeur */}
          <Route path="surveys/:id" element={<EvaluationForm />} />

          {/* Route pour la page de profil */}
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
