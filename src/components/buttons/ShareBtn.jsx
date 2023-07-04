import React, { useState } from "react";
import styled from "styled-components";
import ico from "@img/ico/ico_share.png";
import activeIco from "@img/ico/ico_share_on.png";

import moIco from "@img/ico/mo_ico_share.png";
import moActiveIco from "@img/ico/mo_ico_share_on.png";
export const ShareBtnStyled = styled.button`
  min-width: 23px;
  height: 26px;
  background: url(${(props) => (props.active ? activeIco : ico)}) no-repeat
    center left;
  span {
    color: ${(props) => (props.active ? theme.color_point : "#999")};
    display: inline-block;
    margin-left: 32px;
  }
  @media ${(props) => props.theme.mobile} {
    min-width: 1.2692rem;
    min-height: 1.2692rem;
    background-image: url(${(props) => (props.active ? moActiveIco : moIco)});
    background-size: 1.2692rem;
    span {
      margin-left: 1.769rem;
    }
  }
`;

export default function ShareBtn({ text, onClick, active }) {
  return (
    <ShareBtnStyled active={active} onClick={onClick}>
      {text ? <span>공유</span> : ""}
    </ShareBtnStyled>
  );
}
