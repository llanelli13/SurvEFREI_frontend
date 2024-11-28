import React from 'react';
import './styles/StatsCard.css';

const StatsCards = () => {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-header">
          <div className="stat-icon bg-blue">📊</div>
          <span className="stat-title">Number of Subjects</span>
        </div>
        <div className="stat-value">281</div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div className="stat-icon bg-orange">👥</div>
          <span className="stat-title">Number of Students</span>
        </div>
        <div className="stat-value">2,300</div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div className="stat-icon bg-green">✅</div>
          <span className="stat-title">Answered Surveys</span>
        </div>
        <div className="stat-value">34k</div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div className="stat-icon bg-red">❗</div>
          <span className="stat-title">Surveys Requiring Answer</span>
        </div>
        <div className="stat-value">+91</div>
      </div>
    </div>
  );
};

export default StatsCards;
