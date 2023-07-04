import styled from "styled-components";

export const TableList = styled.ul`
  border-top: solid 2px #252525;
`;
export const TableListItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: solid 1px #eee;
  @media ${({ theme }) => theme.mobile} {
    align-items: start;
  }
`;
