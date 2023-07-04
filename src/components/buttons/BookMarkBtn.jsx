import React, { useState } from "react";
import styled from "styled-components";
import ico from "@img/ico/ico_bookmark.png";
import activeIco from "@img/ico/ico_bookmark_on.png";
import moIco from "@img/ico/mo_ico_bookmark.png";
import moActiveIco from "@img/ico/mo_ico_bookmark_on.png";
export const BookMarkBtnStyled = styled.button`
  min-width: 20px;
  min-height: 26px;
  background: url(${(props) => (props.active ? activeIco : ico)}) no-repeat
    center left;
  span {
    color: ${(props) => (props.active ? theme.color_point : "#999")};
    display: inline-block;
    margin-left: 32px;
  }
  @media ${(props) => props.theme.mobile} {
    min-width: 1.0384rem;
    min-height: 1.2307rem;
    background-image: url(${(props) => (props.active ? moActiveIco : moIco)});
    background-size: 1.0384rem 1.2307rem;
    span {
      margin-left: 1.769rem;
    }
  }
`;

export default function BookMarkBtn({ text }) {
  const [active, setActive] = useState();
  return (
    <BookMarkBtnStyled active={active} onClick={() => setActive(!active)}>
      {text ? <span>스크랩</span> : ""}
    </BookMarkBtnStyled>
  );
}
