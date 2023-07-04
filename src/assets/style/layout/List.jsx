import styled from "styled-components";

export const RowList = styled.ul`
  border-top: 2px solid #252525;
`;

export const ListItem = styled.li`
  ${(props) =>
    props.flexSS
      ? props.theme.flexSS
      : props.flexSC
      ? props.theme.flexSC
      : null};
  border-bottom: 1px solid #eee;
`;
