import styled from 'styled-components';
import background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 50% 100vh;
  background-position: right;

  .signin {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 230px;

    h1 {
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
      font-size: 80px;

      font-weight: 600;
    }
    h2 {
      font-size: 30px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    }
    p {
      color: ${({ theme }) => theme.COLORS.FONT_WHITE};
      font-size: 40px;
      font-weight: 600;
      margin-top: 60px;
      margin-bottom: 40px;
    }
    .boxInput {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .user {
      width: 400px;
      height: 60px;
      font-size: 25px;
      font-weight: 600;
      margin-left: 10px;
    }
    .botao {
      width: 440px;
      height: 60px;
      margin-top: 80px;
      font-size: 25px;
    }
    .botaoTexto {
      font-size: 25px;
      font-weight: 600;
      margin-top: 110px;
    }
  }
`;
