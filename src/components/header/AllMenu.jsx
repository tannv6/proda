import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AllmenuUtillMenu } from "./UtillMenu";
import arrowDown from "@img/btn/all_menu_arrowdown.png";
import arrowUp from "@img/btn/all_menu_arrowup.png";

function NavLink({ children, to, onClick }) {
  return (
    <LinkStyled onClick={onClick}>
      <Link to={to}>{children}</Link>
    </LinkStyled>
  );
}
export default function AllMenu({
  login,
  logoutOnClick,
  resetNum,
  parentClose,
}) {
  const [activeIndex, setActiveIndex] = useState(resetNum);
  // 1단 메뉴 클릭 이벤트 처리 함수
  // 클릭 시 activeIndex라는 state에 해당 인덱스를 저장해준다
  const handleClick = (idx) => {
    if (activeIndex === idx) {
      setActiveIndex(null);
    } else {
      setActiveIndex(idx);
    }
  };
  // 2단 메뉴 클릭 이벤트 처리 함수
  const handleLink = (e, idx, menu) => {
    navigate({
      pathname: `${menu.path}`,
      state: {
        clicked: idx,
      },
    });
    parentClose(false);
  };
  const navigate = useNavigate();
  const MenuList = [
    {
      title: "프로다 소개",
      list: [
        { text: "프로다소개1", path: "/about/about" },
        { text: "프로다소개2", path: "/about/about" },
      ],
    },
    {
      title: "프로채용",
      list: [
        { text: "프로채용1", path: "/recruitment/recruitment" },
        { text: "프로채용2", path: "/recruitment/recruitment" },
      ],
    },
    {
      title: "프로검색",
      list: [
        { text: "프로검색1", path: "/search/search_list" },
        { text: "프로검색2", path: "/search/search_list" },
      ],
    },
    {
      title: "프로아카데미",
      list: [
        { text: "프로아카데미1", path: "/academy/semina" },
        { text: "프로아카데미2", path: "/academy/semina" },
      ],
    },
  ];
  return (
    <AllMenuWrap>
      <AllMenuTop>
        <AllmenuUtillMenu login={login} logoutOnClick={logoutOnClick} />
      </AllMenuTop>
      <Nav>
        <ul>
          {MenuList.map((item, idx) => {
            return (
              <NavItem key={"메뉴" + idx}>
                <NavBtn
                  onClick={() => {
                    handleClick(idx);
                  }}
                  selected={activeIndex === idx ? true : null}
                >
                  {item.title}
                </NavBtn>
                <NavList activeMenu={idx === activeIndex ? true : null}>
                  {item.list?.map((menu, idx) => (
                    <NavLink
                      key={"서브메뉴" + idx}
                      to={menu.path}
                      onClick={(e) => {
                        handleLink(e, idx, menu);
                      }}
                    >
                      {menu.text}
                    </NavLink>
                  ))}
                </NavList>
              </NavItem>
            );
          })}
        </ul>
      </Nav>
    </AllMenuWrap>
  );
}

const AllMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  padding-top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 111;

  &::before {
    content: "";
    background-color: #01d8df;
    width: 100%;
    height: 55px;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const AllMenuTop = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #dbdbdb;

  button {
    width: 90px;
    line-height: 31px;
    display: block;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    color: #252525;
    border: solid 1px #999999;

    & + button {
      margin-left: 9px;
      border-color: #01d8df;
      color: #01d8df;
    }
  }
`;

const Nav = styled.nav`
  max-height: calc(100% - 50px);
  overflow-y: auto;
`;

const NavItem = styled.li`
  border-bottom: 1px solid #eee;
`;

const NavList = styled.ul`
  display: ${(props) => (props.activeMenu ? "block" : "none")};

  padding: 14px 30px;
  background: #f9f9f9;
`;
const LinkStyled = styled.li`
  a {
    display: block;
    padding: 14px 0;
    font-size: 13px;
    color: #454545;
  }
`;
const NavBtn = styled.button`
  display: block;
  width: 100%;
  line-height: 43px;
  padding: 0 22px;
  font-size: 14px;
  font-weight: 500;
  color: #252525;
  text-align: left;
  text-transform: uppercase;
  background: url(${(props) => (props.selected ? arrowUp : arrowDown)})
    no-repeat right 22px center/12px auto;
`;
