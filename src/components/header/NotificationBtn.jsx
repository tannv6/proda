import styled, { css } from "styled-components";

import notiIconW from "@img/ico/notif_icon_white.png";

export const NotifiBtn = styled.button`
  width: 42px;
  height: 42px;
  margin-left: 20px;
  position: relative;
  background: url(${notiIconW}) no-repeat center;
  ${(props) =>
    props.active &&
    css`
      &::after {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        position: absolute;
        top: 6px;
        right: 8px;
        background: ${({ theme }) => theme.color_point};
      }
    `}

  @media ${(props) => props.theme.mobile} {
    width: 34px;
    height: 34px;
    margin-left: 10px;
    background-size: 22px auto;

    &::after {
      top: 5px;
      right: 3px;
    }
  }
`;
