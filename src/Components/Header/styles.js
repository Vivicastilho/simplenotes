import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LINE_COLOR};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    justify-content: space-between;
  }

  > span {
    font-size: 14px;
  }
  strong {
    font-size: 25px;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
`;
