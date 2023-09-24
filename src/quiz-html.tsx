import {
  Container,
  Box,
  Title,
  Text,
  Image,
  BackgroundImage,
} from "./quiz-style.ts";

export function QuizHTML() {
  return (
    <Container>
      <BackgroundImage src="src/assets/background.png" alt="fundo" />
      <Title id="title">Quiz de programação</Title>
      <Box id="texto-e-botao">
        <Text id="text">Pergunta 1 de 3</Text>
      </Box>
      <Image src="src/assets/computer.png" alt="Imagem computador" />
    </Container>
  );
}