import { Container, Box, Title, Text, StartButton, Image, BackgroundImage } from "./quiz-style.ts";

function Quiz() {
  return (
    <Container>
      <BackgroundImage src="src/assets/background.png" alt="fundo" />
      <Title id="title">Quiz de Programação</Title>
      <Box id="texto-e-botao">
        <Text id="text">Clique no botão abaixo para começar!</Text>
        <StartButton id="iniciar">Iniciar</StartButton>
      </Box>
      <Image
        src="src/assets/computer.png"
        alt="Imagem computador"
      />
    </Container>
  );
}

export default Quiz;
