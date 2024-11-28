import React from "react";
import { Link } from "react-router-dom";

const Surveys = () => {
  const professors = [
    { id: 1, name: "John Michael" },
    { id: 2, name: "Alexa Liras" },
    { id: 3, name: "Laurent Perrier" },
  ];

  return (
    <div>
      <h1>Surveys</h1>
      <ul>
        {professors.map((prof) => (
          <li key={prof.id}>
            <span>{prof.name}</span>
            {/* Lien vers le formulaire d'évaluation avec l'ID du professeur */}
            <Link to={`/home/surveys/${prof.id}`}>Répondre</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Surveys;
