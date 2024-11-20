// Dashboard.jsx
import React from "react";
import StatsCards from "../components/StatsCard";  // Importation des StatsCards
import TeacherTable from "../components/TeacherTable";  // Importation de la table des enseignants
import "./styles/Dashboard.css";  // Importation du CSS pour le Dashboard

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Cards Statistiques */}
      <StatsCards />

      {/* Table des enseignants */}
      <TeacherTable />
    </div>
  );
};

export default Dashboard;
