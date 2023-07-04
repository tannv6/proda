import React from "react";
import styled from "styled-components";
import { BtnBig2 } from "../../assets/style/button/Buttons";

const BtnStyled = styled(BtnBig2)`
  max-width: 300px;

  @media ${(props) => props.theme.mobile} {
    max-width: 17.3076rem;
  }
`;
export default function ReturnBtn({ children }) {
  return (
    <>
      <BtnStyled onClick={() => history.back(-1)}>{children}</BtnStyled>
    </>
  );
}
export function MoreBtn({ onClick }) {
  return (
    <>
      <BtnStyled onClick={onClick}>더보기</BtnStyled>
    </>
  );
}
