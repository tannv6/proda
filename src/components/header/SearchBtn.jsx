import styled from "styled-components";
import searchIcon from "@img/ico/search.png";
import searchClose from "@img/ico/search_close.png";
export const SearchBtn = styled.button`
  display: block;
  width: 42px;
  height: 42px;
  font-size: 0;
  background: ${({ theme }) => theme.color_point}
    url(${(props) => (props.active ? searchClose : searchIcon)}) no-repeat
    center;
  border-radius: 50%;
  font-size: 0;
  @media ${(props) => props.theme.mobile} {
    width: 34px;
    height: 34px;
    background-size: 19px auto;
  }
`;
