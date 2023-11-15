import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 500px) {
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
`;

export const Box = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  color: white;
`;

export const StartButton = styled.button`
  background-color: #c767ac;
  color: white;
  margin: 0 auto;
  box-shadow: #0000008f 5px 5px 10px;
  cursor: pointer;
  border: none;
  transition: background-color 1s;

  &:hover {
    background-color: #902ef2;
  }
`;

export const TechnologiesButton = styled(StartButton)`
  margin-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const BackgroundImage = styled.img`
  position: fixed; /* Fixa a imagem de fundo */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Coloca a imagem de fundo atrás de todos os outros elementos */
`;

export const BackIcon = styled.img`
  margin-left: -60px;
  @media (max-width: 430px) {
    margin-left: 60px;
  }
`;

/* QUESTIONS STYLE */

export const BoxQuestions = styled(Box)`
  background-color: #550cf2;
  border-radius: 16px;
  width: 60%;
  margin: 0 auto;
`;

export const QuestionStyle = styled.span`
  color: white;
`;

export const BoxOptions = styled.div`
  display: contents;
`;

export const OptionStyle = styled.button`
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 20px;
  margin-top: 15px;
  background-color: transparent;

  :hover {
    background-color: #CA6BA6;
  }
`;
