import { useNavigate } from "react-router-dom";
import { Container, Box, Title, Text, Image, BackgroundImage, TechnologiesButton } from "./quiz-style.ts";

function SelectQuiz() {

  const navigate = useNavigate();

  const handleClickHTML = () => {
    navigate("/quiz-HTML");
  };

  const handleClickCSS = () => {
    navigate("/quiz-CSS");
  };
  
  const handleClickJS = () => {
    navigate("/quiz-javascript");
  };
  
  return (
    <Container>
      <BackgroundImage src="src/assets/background.png" alt="fundo" />
      <Title id="title">Quiz de programação</Title>
      <Box id="texto-e-botao">
        <Text id="text">Escolha uma categoria</Text>
        <div id='buttons-tecnologies'>
        <TechnologiesButton id="HTML" onClick={handleClickHTML}>HTML</TechnologiesButton>
        <TechnologiesButton id="CSS" onClick={handleClickCSS}>CSS</TechnologiesButton>
        <TechnologiesButton id="JavaScript" onClick={handleClickJS}>JavaScript</TechnologiesButton>
        </div>
      </Box>
      <Image
        src="src/assets/computer.png"
        alt="Imagem computador"
      />
    </Container>
  );
}

export default SelectQuiz;
