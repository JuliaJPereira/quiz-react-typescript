/* eslint-disable react-hooks/rules-of-hooks */
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

export function QuizHTML() {
  return (
    <Container>
      <BackgroundImage src="src/assets/background.png" alt="fundo" />
      <Title id="title">Quiz de programação</Title>
      <Box id="texto-e-botao">
        <Text id="text">Pergunta 1 de 5</Text>
      </Box>
      <BoxQuestions>
        <QuestionStyle>Pergunta1</QuestionStyle>
        <BoxOptions>
          <OptionStyle>Opção1</OptionStyle>
          <OptionStyle>Opção2</OptionStyle>
          <OptionStyle>Opção3</OptionStyle>
          <OptionStyle>Opção4</OptionStyle>
        </BoxOptions>
      </BoxQuestions>
      <NextButton>Próximo</NextButton>
      <Image src="src/assets/computer.png" alt="Imagem computador" />
    </Container>
  );
}

const quizQuestion: IQuestion[] = [
  {
    question: 'O que significa HTML?',
    options: [
      'HyperText Markup Language',
      'High-level Text Management Language',
      'Hyperlink and Text Management Language',
      'HyperTransfer Markup Language',
    ],
    correct: 0,
  },
  {
    question: 'Qual tag é usada para criar um link em HTML?',
    options: [
      '<link>',
      '<a>',
      '<href>',
      '<url>',
    ],
    correct: 1,
  },
  {
    question: 'Como é chamada a estrutura básica de uma página HTML?',
    options: [
      '<web>',
      '<structure>',
      '<html>',
      '<body>'
    ],
    correct: 2,
  },
  {
    question: 'Qual tag é usada para criar uma lista numerada em HTML?',
    options: [
      '<ol>',
      '<ul>',
      '<li>',
      '<dl>'
    ],
    correct: 0,
  },
  {
    question: 'Como adicionar um comentário em HTML?',
    options: [
      '<!-- Comentário -->',
      '// Comentário',
      '/* Comentário */',
      '# Comentário'
    ],
    correct: 0,
  }
]

// Respostas:
// Resposta: a) HyperText Markup Language
// Resposta: b) <a>
// Resposta: c) <html>
// Resposta: a) <ol>
// Resposta: a) <!-- Comentário -->