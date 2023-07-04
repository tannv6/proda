import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export default function Gnb() {
  const topics = [
    { title: "프로다소개", link: "about", linkParent: "about" },
    {
      title: "프로채용",
      link: "recruitment",
      linkParent: "recruitment",
    },
    { title: "프로검색", link: "search_list", linkParent: "search" },
    { title: "프로아카데미", link: "semina", linkParent: "academy" },
  ];

  return (
    <GnbStyled>
      {topics.map((item, index) => (
        <li
          key={index}
          className={`${
            location.pathname.includes("/" + item.linkParent) ? "active" : ""
          }`}
        >
          <Link to={"/" + item.linkParent + "/" + item.link}>{item.title}</Link>
        </li>
      ))}
    </GnbStyled>
  );
}

const GnbStyled = styled.ul`
  ${({ theme }) => {
    const { flex, flexSC, font3, color_point, fontBold } = theme;
    return css`
      ${flex};
      li {
        position: relative;
        ${flexSC};
        &.active::after {
          content: "";
          width: 100%;
          height: 4px;
          background: ${color_point};
          position: absolute;
          bottom: 0;
          left: 0;
        }
        & + li {
          margin-left: 3.6458vw;
        }
        a {
          ${font3};
          line-height: 100px;

          ${fontBold};
          border-bottom: 1px solid transparent;
          text-transform: uppercase;
        }
      }
    `;
  }}
`;
