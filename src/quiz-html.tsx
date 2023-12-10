import Swal from "sweetalert2";
import {
  Container,
  Box,
  Title,
  Text,
  Image,
  BackgroundImage,
  BoxQuestions,
  QuestionStyle,
  BoxOptions,
  OptionStyle,
  NextButton,
} from "./quiz-style.ts";
import { IQuestion } from "./types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function QuizHTML() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleFinish = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Quiz HTML Finalizado!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/fim-quiz");
  };

  const showButtons =
    currentQuestion < quizQuestion.length - 1 ? (
      <NextButton onClick={handleNextQuestion}>Próximo</NextButton>
    ) : (
      <NextButton onClick={handleFinish}>Finalizar Quiz</NextButton>
    );

  return (
    <Container>
      <BackgroundImage src="src/assets/background.png" alt="fundo" />
      <Title id="title">Quiz de programação</Title>
      <Box id="texto-e-botao">
        <Text id="text">
          Pergunta {currentQuestion + 1} de {quizQuestion.length}
        </Text>
      </Box>
      <BoxQuestions>
        {quizQuestion.map(
          (question, index) =>
            index === currentQuestion && (
              <React.Fragment key={index}>
                <QuestionStyle>{question.question}</QuestionStyle>
                <BoxOptions>
                  {question.options.map((option, optionIndex) => (
                    <OptionStyle key={optionIndex}>{option}</OptionStyle>
                  ))}
                </BoxOptions>
              </React.Fragment>
            )
        )}
      </BoxQuestions>
      {showButtons}
      <Image src="src/assets/computer.png" alt="Imagem computador" />
    </Container>
  );
}

const quizQuestion: IQuestion[] = [
  {
    question: "O que significa HTML?",
    options: [
      "HyperText Markup Language",
      "High-level Text Management Language",
      "Hyperlink and Text Management Language",
      "HyperTransfer Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Qual tag é usada para criar um link em HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
  },
  {
    question: "Como é chamada a estrutura básica de uma página HTML?",
    options: ["<web>", "<structure>", "<html>", "<body>"],
    correct: 2,
  },
  {
    question: "Qual tag é usada para criar uma lista numerada em HTML?",
    options: ["<ol>", "<ul>", "<li>", "<dl>"],
    correct: 0,
  },
  {
    question: "Como adicionar um comentário em HTML?",
    options: [
      "<!-- Comentário -->",
      "// Comentário",
      "/* Comentário */",
      "# Comentário",
    ],
    correct: 0,
  },
];

// Respostas:
// Resposta: a) HyperText Markup Language
// Resposta: b) <a>
// Resposta: c) <html>
// Resposta: a) <ol>
// Resposta: a) <!-- Comentário -->
