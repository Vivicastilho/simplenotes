import styled from 'styled-components';

export const Container = styled.ul`
  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.LINE_COLOR};

    display: flex;
    flex-direction: column;
    width: 550px;
    margin: 20px auto;
  }
  li {
    color: ${({ theme }) => theme.COLORS.LINE_COLOR};
  }
`;
