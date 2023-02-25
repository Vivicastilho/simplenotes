import styled from 'styled-components';

export const Container = styled.div`
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
  > ul,
  a {
    margin: 10px auto;
    width: 550px;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
  }
  a:link {
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
  }
  a:visited {
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
  }
`;
