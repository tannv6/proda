import styled from "styled-components";
export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    flex-wrap: wrap;
  } ;
`;
export const Select = styled.select`
  width: 100%;
  flex-shrink: 0;
  & + * {
    margin-left: 10px;
  }
  @media ${(props) => props.theme.mobile} {
    width: ${(props) =>
      props.mo_w_100 ? "100% !important" : "calc(50% - 5px) !important"};
    &:nth-of-type(n + 3) {
      margin-left: 0;
      width: 100% !important;
      margin-top: 10px;
    }
  } ;
`;
