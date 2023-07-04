import React, { useState } from "react";
import styled from "styled-components";
import ico from "@img/ico/ico_heart.png";
import activeIco from "@img/ico/ico_heart_on.png";

import moIco from "@img/ico/mo_ico_heart.png";
import moActiveIco from "@img/ico/mo_ico_heart_on.png";
export const HeartBtnStyled = styled.button`
  min-width: 26px;
  height: 26px;
  background: url(${(props) => (props.active ? activeIco : ico)}) no-repeat
    center left;
  span {
    color: ${(props) => (props.active ? theme.color_point : "#999")};
    display: inline-block;
    margin-left: 32px;
  }
  @media ${(props) => props.theme.mobile} {
    min-width: 1.3461rem;
    min-height: 1.1538rem;
    background-image: url(${(props) => (props.active ? moActiveIco : moIco)});
    background-size: 1.3461rem 1.1538rem;
    span {
      margin-left: 1.769rem;
    }
  }
`;

export default function HeartBtn({ number }) {
  const [active, setActive] = useState();
  return (
    <HeartBtnStyled active={active} onClick={() => setActive(!active)}>
      {number ? <span>{number}</span> : ""}
    </HeartBtnStyled>
  );
}
