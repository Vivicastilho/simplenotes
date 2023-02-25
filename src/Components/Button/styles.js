import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin: 40px auto;
  border: none;

  background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  color: ${({ theme }) => theme.COLORS.FONT_BLACK};

  font-size: 18px;
  font-weight: 600;
`;
