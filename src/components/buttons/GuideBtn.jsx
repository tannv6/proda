import React from "react";
import styled from "styled-components";
import { BtnSmall } from "../../assets/style/button/Buttons";

const GuideBtnStyled = styled(BtnSmall)`
  padding: 0 12px;
  width: auto;
  color: #454545;
  border-radius: 3px;
`;
export default function GuideBtn() {
  return <GuideBtnStyled>상품안내</GuideBtnStyled>;
}
