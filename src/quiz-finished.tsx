import React from "react";
import { useNavigate } from "react-router-dom";

export function QuizFinished() {
  const navigate = useNavigate();

  const handleClickSelectQuiz = () => {
    navigate("/selecione-quiz");
  };

  return (
    <div>
      <h1>Quiz Finalizado</h1>
      <button onClick={handleClickSelectQuiz}>Jogar novamente</button>
    </div>
  );
}