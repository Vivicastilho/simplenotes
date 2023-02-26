import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 18px;
  display: flex;

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    width: 100%;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  nav {
    background: ${({ theme }) => theme.COLORS.NAV_BACKGROUND};
    width: 250px;
    height: 2000px;
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-top: 0px;
    gap: 20px;
    align-items: center;

    > h1 {
      display: flex;
      align-items: center;
      width: 250px;
      height: 105px;
      font-size: 30px;
      justify-content: center;
      background: ${({ theme }) => theme.COLORS.NAV_BACKGROUND};
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: ${({ theme }) => theme.COLORS.LINE_COLOR};
    }
  }
  .navigation {
    display: flex;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    font-weight: 600;
    font-family: 'Poppins' sans-serif;
  }

  .navigation:hover {
    color: ${({ theme }) => theme.COLORS.LINE_COLOR};
    transition: 0.3s;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
    margin-top: 50px;
    margin: 50px auto;

    > h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 30px;
      font-weight: 600;
      margin-top: 60px;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: ${({ theme }) => theme.COLORS.LINE_COLOR};
    }
  }

  main input {
    font-size: 15px;
    padding: 30px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

export const Listas = styled.ul`
  display: flex;

  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.NAV_BACKGROUND};
  width: 1062px;
  height: 150px;
  border-radius: 10px;

  h2 {
    display: flex;
    border: none;
    font-size: 28px;
    margin: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
`;
