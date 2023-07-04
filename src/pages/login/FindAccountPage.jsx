import React, { useState } from "react";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MemberTab from "@components/tab/MemberTab";
import { MemberTtl, MemberTtlBox } from "@assets/style/fontStyle/title";
import { Button } from "@assets/style/button/Buttons";
import { Text } from "@assets/style/fontStyle/Text";
import {
  InputGroup,
  InputRow,
  InputWrap,
  RadioRow,
} from "@components/form/InputBoxs";
import InputEmailGroup, {
  Input,
  InputPhone,
  RadioBox,
} from "@components/form/Inputs";
import { MemberContainer, Inner } from "@assets/style/layout/Container";

const FindAccountPage = () => {
  const [tabOn, setTabOn] = useState(0);
  const tabName = ["이메일 찾기", "비밀번호 찾기"];
  const code = "member";
  const category = "find_account";
  const title = "이메일/비밀번호 찾기";
  return (
    <>
      <Header />
      <MemberContainer>
        <Inner>
          <MemberTtlBox>
            <MemberTtl>{title}</MemberTtl>
          </MemberTtlBox>
          <MemberTab
            tabOn={tabOn}
            categeory={category}
            setTabOn={setTabOn}
            tabName={tabName}
          />
          <FindForm tabOn={tabOn} categeory={category} />
          <div className=" login_wrap"></div>
        </Inner>
      </MemberContainer>
      <Footer />
    </>
  );
};

export function FindForm(props) {
  return (
    <div className="login_wrap">
      {props.tabOn == 0 ? FindEmail() : FindPW()}
    </div>
  );

  // 이메일 찾기
  function FindEmail() {
    return (
      <>
        <InputGroup>
          <InputWrap>
            <Input type="text" placeholder="이름을 입력해주세요" />
            <InputPhone />
            <Button lineBlack>인증번호 전송</Button>
            <Button bgPoint>이메일 확인</Button>
          </InputWrap>
        </InputGroup>
        <InputGroup>
          <InputWrap>
            <label htmlFor="cfm_email">확인된 이메일</label>
            <Input type="text" id="cfm_email" disabled />
          </InputWrap>
        </InputGroup>
      </>
    );
  }
  function FindPW() {
    const [phone, setPhone] = useState(1);

    const handleChange = () => {
      setPhone(!phone);
    };

    return (
      <>
        <FindText>
          <Text lh_lg>본인인증 받으신 정보를 입력해 주세요.</Text>
          <Text>
            휴대폰 번호 or 아이디(이메일 주소)로 임시 패스워드를 보내드립니다.
          </Text>
        </FindText>
        <InputGroup>
          <InputWrap>
            <RadioRow>
              <RadioBox id="get_phone" name="find_pw" onChange={handleChange}>
                휴대폰으로 받기
              </RadioBox>
              <RadioBox id="get_email" name="find_pw" onChange={handleChange}>
                이메일로 받기
              </RadioBox>
            </RadioRow>
            <InputRow>
              <Input type="text" placeholder="이름을 입력해주세요." />
            </InputRow>
            {phone ? (
              <InputPhone num="_find1" />
            ) : (
              <InputEmailGroup num="_find2" holder="이메일" />
            )}
            <Button lineBlack>인증번호 전송</Button>
            <Button bgPoint>비밀번호 찾기</Button>
          </InputWrap>
        </InputGroup>
      </>
    );
  }
}

const FindText = styled.div`
  margin: 30px 0;
`;

export default FindAccountPage;
