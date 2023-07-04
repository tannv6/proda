import React, { useState } from "react";
import styled from "styled-components";
import starImg from "@img/ico/star.jpg";
import starImgOn from "@img/ico/star_on.png";

export const StarStyled = styled.button`
  width: 20px;
  height: 20px;
  background: url(${(props) => (props.on ? starImgOn : starImg)}) no-repeat
    center / cover;
`;

export default function StarBtn() {
  const [on, setOn] = useState();
  return (
    <StarStyled type="button" on={on} onClick={() => setOn(!on)}></StarStyled>
  );
}
