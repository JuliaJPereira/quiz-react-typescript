import { Box, Title, Text, StartButton } from "./quiz-style.ts";

function Quiz() {
  return (
    <>
      <Title id="title">Quiz de Programação</Title>
      <Box id="texto-e-botao">
        <Text id="text">Clique no botão abaixo para começar!</Text>
        <StartButton id="iniciar">Iniciar</StartButton>
      </Box>
      <img
        src="src/assets/computer.png"
        alt="Imagem do computador"
        width={"500px"}
      />
    </>
  );
}

export default Quiz;
