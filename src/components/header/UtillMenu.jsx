import React, { useState } from "react";
import styled from "styled-components";
import mypageBoxBg from "@img/sub/msg_box188x148.png";
import mypageBoxBgmo from "@img/sub/msg_box236x245.png";
import { Mobile, Pc } from "@components/Responsive";
import { useNavigate } from "react-router-dom";
import { NotifiBtn } from "./NotificationBtn";
const MypageBox = styled.div`
  position: relative;
  button {
    font-weight: 500;
  }
`;

const MypageTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100% + 5px);
  right: -20px;
  width: 188px;
  height: 148px;
  background: url(${mypageBoxBg}) no-repeat center center / cover;
  color: #252525;
  li {
    &:first-of-type a {
      color: #757575;
    }
    & + li {
      margin-top: 15px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    width: 118px;

    height: 130px;
    background-image: url(${mypageBoxBgmo});
  }
`;
export const HamBtnStyled = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  z-index: 1;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export function LoginBtn() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/login/login")}>로그인</button>
    </>
  );
}

export function JoinBtn() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/member/join")}>회원가입</button>;
}
export function HamBtn({ onClick }) {
  return <HamBtnStyled onClick={onClick}></HamBtnStyled>;
}

export function LogoutBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      로그아웃
    </button>
  );
}

export function MypageBtn() {
  const [mypageTabShow, setMypageTabShow] = useState();
  return (
    <>
      <MypageBox>
        <button type="button" onClick={() => setMypageTabShow(!mypageTabShow)}>
          마이페이지
        </button>
        {mypageTabShow && (
          <MypageTab>
            <ul>
              <li>
                <button onClick={() => setMypageTabShow()}>
                  마이프로 정보
                </button>
              </li>
              <li>
                <button onClick={() => setMypageTabShow()}>스크랩</button>
              </li>
            </ul>
          </MypageTab>
        )}
      </MypageBox>
    </>
  );
}

export default function UtillMenu({ login, logoutOnClick }) {
  return (
    <>
      {login ? (
        <>
          <Pc>
            <LogoutBtn onClick={logoutOnClick} />
          </Pc>
          <MypageBtn />
          <NotifiBtn active={true} />
        </>
      ) : (
        <>
          <Pc>
            <LoginBtn />
            <JoinBtn />
          </Pc>
        </>
      )}
    </>
  );
}

export function AllmenuUtillMenu({ login, logoutOnClick }) {
  const navigate = useNavigate();
  return (
    <>
      {login ? (
        <>
          <LogoutBtn onClick={logoutOnClick} />
          <button type="button" onClick={() => navigate("/mypage/main")}>
            마이페이지
          </button>
        </>
      ) : (
        <>
          <LoginBtn />
          <JoinBtn />
        </>
      )}
    </>
  );
}
