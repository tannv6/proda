import React, { useState } from "react";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Link } from "react-router-dom";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import MemberTab from "@components/tab/MemberTab";
import {
  MemberTtl,
  MemberTtlBot,
  MemberTtlBox,
} from "@assets/style/fontStyle/title";
import { Inner, MemberContainer } from "@assets/style/layout/Container";
import { InputGroup, InputWrap } from "@components/form/InputBoxs";
import { FlexBox } from "@assets/style/layout/Flex";
import naverIco from "@img/ico/ico_naver_52x52.png";
import kakaoIco from "@img/ico/ico_kakao_52x52.png";
import { Checkbox, Input } from "@components/form/Inputs";
import { Button } from "@assets/style/button/Buttons";
import { LoginHelpRow } from "@assets/style/component/MemberPage";

const LoginPage = () => {
  const [tabOn, setTabOn] = useState(0);
  const tabName = ["개인회원", "기업회원"];
  const category = "login";
  const title = "로그인";
  const text = "너도 프로, 나도 프로, 우리는 프로다!";
  return (
    <>
      <Header />
      <MemberContainer>
        <Inner>
          <MemberTtlBox>
            <MemberTtl big>{title}</MemberTtl>
            <MemberTtlBot>{text}</MemberTtlBot>
          </MemberTtlBox>
          <MemberTab
            tabOn={tabOn}
            category={category}
            setTabOn={setTabOn}
            tabName={tabName}
          />
          <LoginWrap>
            <LoginForm tabOn={tabOn} category={category} />
            <BtnWrap momgt2="1.923rem">
              <LoginBtn rounded_3 bgPoint>
                로그인
              </LoginBtn>
            </BtnWrap>
            {tabOn == 0 ? <SnsLogin /> : ""}
          </LoginWrap>
        </Inner>
      </MemberContainer>
      <Footer />
    </>
  );
};

const LoginForm = (props) => {
  return (
    <InputGroup>
      <InputWrap>
        <Input
          type="email"
          id={`email_${props.tabOn}`}
          placeholder="이메일을 입력해주세요."
        />
        <Input
          type="password"
          id={`pw_${props.tabOn}`}
          placeholder="비밀번호를 입력해주세요."
        />
        <CheckPoint flexBC>
          <Checkbox
            id={`save_id${props.tabOn}`}
            name={`save_id${props.tabOn}`}
            value="Y"
          >
            로그인 상태 유지
          </Checkbox>
          <LoginHelpRow>
            <li>
              <Link to="/member/find_account">
                이메일<span>/</span>비밀번호 찾기
              </Link>
            </li>
            <li>
              <Link to="/member/join">
                <b>회원가입</b>
              </Link>
            </li>
          </LoginHelpRow>
        </CheckPoint>
      </InputWrap>
    </InputGroup>
  );
};
// 개인회원만
function SnsLogin() {
  return (
    <SnsLoginWrap>
      <p>SNS로그인</p>

      <SnsBtnWrap flexCC>
        <NaverLoginBtn>네이버 로그인</NaverLoginBtn>
        <KakaoLoginBtn>카카오 로그인</KakaoLoginBtn>
      </SnsBtnWrap>
    </SnsLoginWrap>
  );
}
const LoginWrap = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const CheckPoint = styled(FlexBox)`
  margin-top: 20px;
`;

const SnsLoginWrap = styled.div`
  margin-top: 40px;

  > p {
    position: relative;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #454545;

    &::before,
    &::after {
      content: "";
      width: 36.52%;
      height: 1px;
      background: #eee;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    margin-top: 2.3076rem;
    > p {
      font-size: 1.0769rem;
    }
  }
`;
const SnsBtnWrap = styled(FlexBox)`
  margin-top: 2.3076rem;
  @media ${({ theme }) => theme.mobile} {
  }
`;
const SnsBtn = styled.button`
  display: block;
  width: 52px;
  height: 52px;
  font-size: 0;
  background: no-repeat center center/cover;

  & + button {
    margin-left: 20px;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 3.4615rem;
    height: 3.4615rem;

    & + button {
      margin-left: 1.1538rem;
    }
  }
`;
const NaverLoginBtn = styled(SnsBtn)`
  background-image: url(${naverIco});
`;
const KakaoLoginBtn = styled(SnsBtn)`
  background-image: url(${kakaoIco});
`;

const LoginBtn = styled(Button)`
  box-shadow: 0 0.6875rem 1.2rem rgba(1, 216, 223, 0.25);
  @media ${(props) => props.theme.mobile} {
    box-shadow: 0 0.3846rem 0.6923rem rgba(1, 216, 223, 0.25);
  }
`;
export default LoginPage;
