// StatsCards.jsx
import React from "react";
import "./styles/StatsCard.css";  // Assurez-vous d'avoir un fichier CSS pour styliser les cartes

const StatsCards = () => {
  return (
    <div className="stats-cards">
      <div className="stat-card">
        <h2>New Surveys</h2>
        <p>281</p>
      </div>
      <div className="stat-card">
        <h2>Not Answered Surveys</h2>
        <p>2,300</p>
      </div>
      <div className="stat-card">
        <h2>Answered Surveys</h2>
        <p>34k</p>
      </div>
      <div className="stat-card">
        <h2>Surveys Requiring Answer</h2>
        <p>+91</p>
      </div>
    </div>
  );
};

export default StatsCards;
