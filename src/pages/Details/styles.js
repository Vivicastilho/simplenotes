import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 100vh;
  font-size: 18px;
  display: flex;
  flex-direction: column;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    margin: 40px auto;
  }

  .buttonText {
    display: flex;
    font-size: 16px;
    justify-content: end;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  width: 550px;
  height: 300px;
  color: ${({ theme }) => theme.COLORS.FONT_WHITE};

  h1 {
    font-size: 28px;
    text-align: center;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
  }
  p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin: 25px auto;
  }
`;

// export const Links = styled.ul`
//   list-style: none;
//   font-family: 'Poppins', sans-serif;
//   font-size: 30px;

//   > li {
//     margin-top: 12px;
//   }
// `;
