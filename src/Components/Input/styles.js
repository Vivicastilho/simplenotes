import styled from 'styled-components';

export const Container = styled.form`
  display: flex;

  input {
    width: 1062px;
    height: 56px;
    background: ${({ theme }) => theme.COLORS.NAV_BACKGROUND};

    border-radius: 10px;
    border: none;
  }
`;
