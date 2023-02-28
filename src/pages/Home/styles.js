import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 18px;
  display: flex;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  nav {
    background: ${({ theme }) => theme.COLORS.NAV_BACKGROUND};
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: space-between;
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
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: -550px;
    gap: 20px;
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

  .criarNota {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 0;
  }

  .listaNota {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    gap: 20px;
  }

  .listaNota h1 {
    display: flex;
    display: flex;
    flex-direction: column;
    width: 550px;
    margin: 20px auto;
  }

  main {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;

    gap: 50px;

    h3 {
      display: flex;
      font-family: 'Poppins', sans-serif;
      font-size: 30px;
      font-weight: 600;
      padding: 10px;
      margin: 40px;
      width: 100%;

      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

      border-bottom: 1px;
      border-bottom-style: solid;
      border-bottom-color: ${({ theme }) => theme.COLORS.LINE_COLOR};

      > header {
        display: flex;

        padding: 0 40px;
      }
    }

    .tag {
      display: flex;
      align-items: flex-start;
    }
    .tag li {
      margin-top: 10px;
    }
    .tag li a {
      font-size: 12px;
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
  width: 100%;
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
