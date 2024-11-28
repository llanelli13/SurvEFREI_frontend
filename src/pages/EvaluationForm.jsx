import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Exemple de données pour chaque professeur
const professorQuestions = {
  1: [
    { question: "Comment évaluez-vous la clarté des explications ?", type: "rating" },
    { question: "Le professeur est-il disponible pour des questions ?", type: "rating" },
    { question: "Notez la qualité du support de cours", type: "rating" },
  ],
  2: [
    { question: "Comment évaluez-vous la gestion du temps ?", type: "rating" },
    { question: "Le professeur est-il à l'écoute des étudiants ?", type: "rating" },
    { question: "Notez l'organisation du cours", type: "rating" },
  ],
  3: [
    { question: "Comment évaluez-vous la méthodologie de travail ?", type: "rating" },
    { question: "Le professeur vous aide-t-il à comprendre les concepts ?", type: "rating" },
    { question: "Notez l'interactivité du cours", type: "rating" },
  ],
  4: [
    { question: "Comment évaluez-vous la qualité des supports de révision ?", type: "rating" },
    { question: "Le professeur motive-t-il les étudiants ?", type: "rating" },
    { question: "Notez l'engagement du professeur dans les cours", type: "rating" },
  ],
};

const EvaluationForm = () => {
  const { id } = useParams();  // Récupère l'ID du professeur à partir de l'URL
  const [responses, setResponses] = useState({});

  // Récupère les questions associées à l'ID du professeur
  const questions = professorQuestions[id];

  // Si l'ID n'existe pas, afficher un message d'erreur
  if (!questions) {
    return <h2>Professeur introuvable</h2>;
  }

  // Gérer les réponses aux questions
  const handleChange = (questionIndex, value) => {
    setResponses((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Réponses soumises : ", responses);
    alert("Merci pour vos réponses !");
  };

  return (
    <div className="evaluation-form-container">
      <h2>Évaluation du Professeur {id}</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <label>{question.question}</label>
            <input
              type="range"
              min="1"
              max="5"
              value={responses[index] || 3}
              onChange={(e) => handleChange(index, e.target.value)}
              className="rating-input"
            />
            <span>{responses[index] || 3}</span>
          </div>
        ))}
        <button type="submit" className="submit-button">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default EvaluationForm;
