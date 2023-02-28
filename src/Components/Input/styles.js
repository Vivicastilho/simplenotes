import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 20px;

  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  /* width: 1062px;
  height: 56px; */
  background: ${({ theme }) => theme.COLORS.NAV_BACKGROUND};

  border-radius: 10px;
  border: none;
  input {
    background: transparent;
    border: 0;
    width: 1062px;
    height: 56px;
    outline: none;
    color: white;
    font-size: 20px;
  }
`;
