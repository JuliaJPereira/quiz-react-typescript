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
  background-color: #C767AC;
  color: white;
  margin: 0 auto;
  box-shadow: #0000008f 5px 5px 10px;
  cursor: pointer;
  border: none;
  transition: background-color 1s;

  &:hover {
    background-color: #902EF2;
  }
`;

export const TechnologiesButton = styled(StartButton)`
  margin-right: 15px
`;

export const Image = styled.img`
  width: 500px;
`;

export const BackgroundImage = styled.img`
  position: fixed; /* Fixa a imagem de fundo */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Coloca a imagem de fundo atrás de todos os outros elementos */
`;
