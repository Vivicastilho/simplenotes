import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background: none;
  font-size: 25px;

  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`;
