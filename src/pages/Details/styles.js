import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 100vh;
  font-size: 18px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    margin: 40px auto;
  }
`;

export const Content = styled.main`
  display: flex;
  margin: 140px auto;
  width: 550px;
  color: ${({ theme }) => theme.COLORS.FONT_WHITE};

  h1 {
    font-size: 30px;
    text-align: center;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    margin: 25px auto;
  }
`;
