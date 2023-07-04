import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Meta from "@components/Meta";
import { Mobile, Pc } from "./Responsive";
import { Link, useLocation } from "react-router-dom";
import hamIco from "@img/btn/ham_ico.png";
import hamIcoB from "@img/btn/ham_ico_b.png";
import hamIcoOn from "@img/btn/ham_on_ico.png";
import { NotifiBtn } from "./header/NotificationBtn";

import notiIconB from "@img/ico/notif_icon_black.png";
import { HamBtnStyled } from "./header/UtillMenu";
import { Inner } from "@assets/style/layout/Container";

import SearchPop from "./header/SearchPop";
import AllMenu from "./header/AllMenu";
import Gnb from "./header/Gnb";
import UtillMenu, { HamBtn } from "./header/UtillMenu";
import { SearchBtn } from "./header/SearchBtn";
import { FlexBox } from "@assets/style/layout/Flex";

const HeaderElement = ({ children, bgChange, allMenuOn, searchOn }) => {
  return (
    <>
      {bgChange || searchOn || location.pathname !== "/main" ? (
        <HeaderWhite id="header" allMenuOn={allMenuOn} searchOn={searchOn}>
          {children}
        </HeaderWhite>
      ) : (
        <HeaderStyled id="header" allMenuOn={allMenuOn}>
          {children}
        </HeaderStyled>
      )}
    </>
  );
};

const Header = () => {
  const location = useLocation();
  const [resetNum, setResetNum] = useState();

  // 로그인됐을때
  const [login, setLogin] = useState(true);
  const [allMenuOn, setAllMenuOn] = useState();
  const [bgChange, setBgChange] = useState();
  const [searchOn, setSearchOn] = useState();

  if (allMenuOn) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  window.onscroll = function () {
    if (location.pathname == "/main") {
      HeaderActive();
    }
  };
  function HeaderActive() {
    if (window.pageYOffset > 0) {
      setBgChange(true);
    } else {
      setBgChange(false);
    }
  }
  const parentClose = (state) => {
    setAllMenuOn(state);
  };

  return (
    <>
      <Meta />
      <HeaderElement
        bgChange={bgChange}
        searchOn={searchOn}
        allMenuOn={allMenuOn}
      >
        <HeaderInner flexBC>
          <Logo>
            <Link to="/">
              <span>p</span> 프로다
            </Link>
          </Logo>
          <Pc>
            <nav className="gnb">
              <Gnb />
            </nav>
          </Pc>
          <RightMenu className="flex__c">
            {!allMenuOn && (
              <>
                <UtillMenu
                  login={login}
                  logoutOnClick={() => setLogin(false)}
                />

                <SearchBtn
                  onClick={() => setSearchOn(!searchOn)}
                  active={searchOn}
                />
              </>
            )}
            <Mobile>
              <HamBtn
                onClick={() => {
                  setAllMenuOn(!allMenuOn);
                  setResetNum(null);
                }}
              />
            </Mobile>
          </RightMenu>
        </HeaderInner>
        <Mobile>
          {allMenuOn && (
            <AllMenu
              allMenuOn={allMenuOn}
              login={login}
              resetNum={resetNum}
              parentClose={parentClose}
              logoutOnClick={() => setLogin(false)}
            />
          )}
        </Mobile>
      </HeaderElement>
      {searchOn && <SearchPop bgChange={bgChange} />}
    </>
  );
};

export default Header;

const HeaderInner = styled(FlexBox)`
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
  height: 100px;
  min-height: 50px;
  z-index: 50;
  @media ${(props) => props.theme.mobile} {
    height: 50px;
    width: 100%;
    padding-left: 15px;
    position: relative;
    z-index: 9999999;
  }
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: inherit;
  flex-shrink: 0;
  text-transform: uppercase;
  a {
    display: block;
    span {
      color: inherit;
    }
  }
`;
const RightMenu = styled.div`
  & > * {
    font-weight: 500;
    display: ${(props) => (props.size ? "none" : "inline-block")};

    & + * {
      margin-left: 17px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    & > * {
      & + * {
        margin-left: 10px;
      }
    }
  }
`;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  ${HamBtnStyled} {
    background-image: url(${(props) => (props.allMenuOn ? hamIcoOn : hamIco)});
  }

  @media ${(props) => props.theme.mobile} {
  }
`;

const HeaderWhite = styled(HeaderStyled)`
  background: #fff;
  border-bottom: 1px solid #eeeeee;
  color: ${(props) => (props.allMenuOn ? "#fff" : "#252525")};
  ${Logo} {
    span {
      color: ${(props) => (props.allMenuOn ? "#fff" : props.theme.color_point)};
    }
  }
  ${NotifiBtn} {
    background-image: url(${notiIconB});
  }
  ${HamBtnStyled} {
    background-image: url(${(props) =>
      props.allMenuOn ? hamIcoOn : props.bgChange ? hamIco : hamIcoB});
  }

  @media ${(props) => props.theme.mobile} {
  }
`;
