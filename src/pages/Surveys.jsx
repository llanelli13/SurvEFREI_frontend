import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/Surveys.css';

const Surveys = () => {
  const [professors, setProfessors] = useState([
    { name: "Professeur A", id: 1 },
    { name: "Professeur B", id: 2 },
    { name: "Professeur C", id: 3 },
    { name: "Professeur D", id: 4 },
  ]);
  const [newProfessor, setNewProfessor] = useState("");

  const handleAddProfessor = () => {
    if (newProfessor.trim() !== "") {
      setProfessors([...professors, { name: newProfessor.trim(), id: professors.length + 1 }]);
      setNewProfessor(""); // Réinitialise le champ
    } else {
      alert("Veuillez entrer un nom de professeur valide !");
    }
  };

  return (
    <div className="survey-container">
      <h2 className="professor-list-title">Liste des professeurs</h2>
      <table className="professor-table">
        <thead>
          <tr>
            <th>Professeur</th>
            <th>Matière</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((prof) => (
            <tr key={prof.id}>
              <td>{prof.name}</td>
              <td>Développeur</td> {/* Personnaliser le sujet */}
              <td>
              <Link to={`/home/survey/${prof.id}`} className="answer-link">
                Répondre
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Ajouter un professeur</h2>
      <div className="add-professor">
        <input
          type="text"
          placeholder="Nom du professeur"
          value={newProfessor}
          onChange={(e) => setNewProfessor(e.target.value)}
          className="input-professor"
        />
        <button onClick={handleAddProfessor} className="add-button">
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default Surveys;
