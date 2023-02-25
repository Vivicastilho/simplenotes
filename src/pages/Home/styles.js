import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 18px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h1 {
    display: flex;
    align-items: center;
    width: 310px;
    height: 105px;
    font-size: 30px;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.NAV_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.LINE_COLOR};
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;

  nav {
    background: ${({ theme }) => theme.COLORS.NAV_BACKGROUND};
    width: 260px;
    height: 1250px;
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-top: 106px;
    gap: 20px;
    align-items: center;
  }

  .navigation {
    display: flex;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }

  > .text {
    display: flex;
    justify-content: center;
    margin: 40px auto;
    align-items: center;
    font-size: 20px;
  }
`;
