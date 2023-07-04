import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import { FormTtl } from "@assets/style/fontStyle/title";
import { BtnBig, Button } from "@assets/style/button/Buttons";
import delIco from "@img/ico/delete_btn.png";
import { MemberTtl, MemberTtlBox } from "@assets/style/fontStyle/title";
import NaverIco from "@img/ico/join_naver.png";
import KakaoIco from "@img/ico/join_kakao.png";
import EmailIco from "@img/ico/join_email.png";
import { AsideBtnRow, InputGroup, InputWrap } from "@components/form/InputBoxs";
import InputEmailGroup, {
  InputAddressGroup,
  InputPhone,
  Checkbox,
  Input,
  Label,
  FileInput,
  Select,
} from "@components/form/Inputs";
import { Inner, MemberContainer } from "@assets/style/layout/Container";
import { LoginHelpRow } from "@assets/style/component/MemberPage";
import { FlexBox } from "@assets/style/layout/Flex";

const JoinPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = [
    "프로다 개인 회원가입",
    "이메일로 가입하기",
    "기업회원 가입하기",
  ];
  const [tabOn, setTabOn] = useState();

  return (
    <>
      <Header />
      <MemberContainer>
        <Inner>
          <MemberTtlBox>
            <MemberTtl>
              {location.pathname == "/member/join" ? (
                title[0]
              ) : (
                <>
                  {location.pathname == "/member/join_form"
                    ? tabOn == 0
                      ? title[1]
                      : title[2]
                    : ""}
                </>
              )}
            </MemberTtl>
          </MemberTtlBox>
          {location.pathname == "/member/join" ? (
            <>
              <HowJoinBtn>
                <JoinNaverBtn>네이버 간편 가입하기</JoinNaverBtn>
                <JoinKakaoBtn>카카오톡 간편 가입하기</JoinKakaoBtn>
                <JoinHowBtn
                  onClick={() => {
                    navigate("/member/join_form");
                    setTabOn(0);
                  }}
                >
                  이메일 간편 가입하기
                </JoinHowBtn>
              </HowJoinBtn>
              <LoginHelpRow flexCC>
                <li>
                  <Link to="/login/login">로그인</Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/member/join_form");
                      setTabOn(1);
                    }}
                  >
                    <b>기업 회원가입</b>
                  </button>
                </li>
              </LoginHelpRow>
            </>
          ) : (
            <>
              {/* 이메일로 */}
              {location.pathname == "/member/join_form" || tabOn == 0 ? (
                <JoinForm tabOn={tabOn} />
              ) : (
                <JoinForm tabOn={tabOn} />
              )}
            </>
          )}
        </Inner>
      </MemberContainer>
      <Footer />
    </>
  );
};

const JoinForm = ({ tabOn }) => {
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCfmError, setPasswordCfmError] = useState(false);
  const handlePasswordChange = (e) => {
    const passwordFormat =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
    const isPasswordValid = passwordFormat.test(e.target.value);
    setPasswordError(!isPasswordValid);
  };
  const handlePasswordCfm = (e) => {
    console.log(document.querySelector('input[id="pw1"]').value);
    console.log(e.target.value);
    e.target.value !== document.querySelector('input[id="pw1"]').value
      ? setPasswordCfmError(true)
      : setPasswordCfmError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(tabOn);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <FormTtl>
            {tabOn == 0 ? "기본 정보 입력" : "관리자 정보 입력"}
          </FormTtl>
          <InputWrap>
            <Label htmlFor="">이메일*</Label>
            <InputEmailGroup num={tabOn} />
            <Button lineBlack>중복체크</Button>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="">이름*</Label>
            <Input type="text" />
          </InputWrap>
          <InputWrap>
            <Label htmlFor="">비밀번호 입력*</Label>
            <Input
              type="password"
              id="pw1"
              error={passwordError}
              onChange={handlePasswordChange}
            />
            <MsgBox>
              <Msg>8 ~ 20자의 영문 대/소문자, 숫자, 특수문자를 사용하세요.</Msg>
              {passwordError ? (
                <Msg err>
                  비밀번호는 8~20자의 영문 대/소문자, 숫자, 특수문자 등 3종류
                  이상으로 조합해주세요.
                </Msg>
              ) : (
                <Msg oaky>사용 가능한 비밀번호입니다.</Msg>
              )}
            </MsgBox>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="">비밀번호 확인*</Label>
            <Input
              type="password"
              id="pw2"
              error={passwordCfmError}
              onChange={handlePasswordCfm}
            />
            <MsgBox>
              <Msg>필수 입력 정보입니다</Msg>
              {passwordCfmError ? (
                <Msg err>비밀번호가 일치하지 않습니다.</Msg>
              ) : (
                ""
              )}
            </MsgBox>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="">휴대폰 번호*</Label>
            <InputPhone />
            <Button lineBlack>인증번호 전송</Button>
          </InputWrap>
        </InputGroup>
        {tabOn == 1 ? <Corporation /> : ""}
        <InputGroup>
          <FormTtl>약관동의</FormTtl>
          {/* <AgreeList /> */}
        </InputGroup>

        <BtnWrap>
          <Button bgPoint>회원가입 완료</Button>
        </BtnWrap>
      </form>
    </>
  );
};

// 기업회원 회원가입일때만 나옵니다
function Corporation() {
  const fileRef = React.useRef(null);
  const handleButtonClick = (e) => {
    fileRef.current.click();
  };
  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <>
      <InputGroup>
        <FormTtl>회사 정보 입력</FormTtl>
        <InputWrap>
          <Label htmlFor="">회사명*</Label>
          <input type="text" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="">회사주소*</Label>
          <InputAddressGroup />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="">사업자등록번호*</Label>
          <Input type="text" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="">사업분야*</Label>
          <Select name="" id="">
            <option value="">선택</option>
          </Select>
        </InputWrap>
        <InputWrap>
          <Label htmlFor="">사업자등록증 첨부*</Label>
          <FileInput
            ref={fileRef}
            id="fileUpload"
            onChange={handleChange}
            onClick={handleButtonClick}
          />
          <UploadWrap className="upload_wrap">
            <li>
              <a href="#!">프로다_사업자등록증_사본.jpg</a>
              <DelBtn></DelBtn>
            </li>
            <li>
              <a href="#!">프로다_사업자등록증_사본.jpg</a>
              <DelBtn></DelBtn>
            </li>
            <li>
              <a href="#!">프로다_사업자등록증_사본.jpg</a>
              <DelBtn></DelBtn>
            </li>
            <li>
              <a href="#!">프로다_사업자등록증_사본.jpg</a>
              <DelBtn></DelBtn>
            </li>
          </UploadWrap>
        </InputWrap>
      </InputGroup>
    </>
  );
}
function AgreeList() {
  const agreeWrapRef = useRef();
  const data = [
    { id: 0, title: "이용약관 동의" },
    {
      id: 1,
      title: "개인정보 수집 및 이용동의",
    },
    {
      id: 2,
      title: "문사 서비스 이용약관 동의",
    },
  ];
  const handleAllCheck = (e) => {
    agreeWrapRef.current
      .querySelectorAll("input[name='agree']")
      .forEach((itm) => {
        itm.checked = e.target.checked;
      });
  };

  const handleAllCheckInput = (e) => {
    let allChk = 0;
    agreeWrapRef.current
      .querySelectorAll("input[name='agree']")
      .forEach((itm) => {
        if (itm.checked == false) {
          document.querySelector("#allCheck").checked = false;
          allChk++;
        }
      });
    if (!allChk) {
      document.querySelector("#allCheck").checked = true;
    }
  };
  return (
    <div className="agree_wrap" ref={agreeWrapRef}>
      <AllChkBox>
        <Checkbox id="allCheck" name="allCheck" onChange={handleAllCheck}>
          모든 약관에 동의합니다.
        </Checkbox>
      </AllChkBox>
      <AgreeListWrap>
        {data.map((item, index) => {
          return (
            <AgreeListItem key={index}>
              <Checkbox
                id={`agree0${index}`}
                name="agree"
                defaultValue={index}
                onClick={handleAllCheckInput}
              >
                <span>[필수]</span>
                {item.title}
              </Checkbox>
              <AgreeView />
            </AgreeListItem>
          );
        })}
      </AgreeListWrap>
      <ADAgreeBox flexBC>
        <Checkbox id="agree04" name="agree">
          광고성 정보 수신 동의
        </Checkbox>
        <AgreeView color="#999" />
      </ADAgreeBox>
    </div>
  );
}

function AgreeView({ color, onClick }) {
  return (
    <AgreeDetailBtn type="button" color={color} onClick={onClick}>
      자세히보기
    </AgreeDetailBtn>
  );
}
export default JoinPage;

const MsgBox = styled.div``;
const Msg = styled.p`
  font-size: 13px;
  line-height: 1.545;
  color: ${(props) =>
    props.err ? theme.color_error : props.okay ? theme.color_okay : "#252525"};
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8461rem;
  }
`;

const AgreeDetailBtn = styled.button`
  display: inline-block;
  font-size: 13px;
  color: ${(props) => (props.color ? props.color : theme.color_okay)};
  @media ${(props) => props.theme.mobile} {
    font-size: 0.846rem;
  }
`;

const DelBtn = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(${delIco}) no-repeat center center / 10px;
  @media ${(props) => props.theme.mobile} {
    width: 2.8846rem;
    height: 2.8846rem;
  }
`;
const UploadWrap = styled.ul`
  li {
    background-color: ${({ theme }) => theme.bg_1};
    display: flex;
    align-item: center;
    padding-left: 10px;
    & + li {
      margin-top: 4px;
    }
    a {
      line-height: 30px;
      font-size: 13px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    li {
      justify-content: space-between;
      & + li {
        margin-top: 10px;
      }
      a {
        font-size: 0.8461rem;
        line-height: 2.8846rem;
      }
    }
  }
`;
export const HowJoinBtn = styled.div`
  * + * {
    margin-top: 20px;
  }
  margin-bottom: 40px;
  @media ${(props) => props.theme.mobile} {
    * + * {
      margin-top: 15px;
    }
  }
`;

const JoinHowBtn = styled(BtnBig)`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 1.25rem;
  height: 60px;

  border: 1px solid #dbdbdb;
  background-color: #fff;
  font-weight: 500;
  background: #fff url(${EmailIco}) no-repeat left 20px center;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.1538rem;
    height: 3.4615rem;
    background-size: 1.7307rem auto;
    background-position: left 1.1538rem center;
  }
`;
const JoinNaverBtn = styled(JoinHowBtn)`
  color: ${({ theme }) => theme.naverText};
  background-color: ${({ theme }) => theme.naverBg};
  border-color: ${({ theme }) => theme.naverBg};
  background-image: url(${NaverIco});
`;
const JoinKakaoBtn = styled(JoinHowBtn)`
  background-color: ${({ theme }) => theme.kakaoBg};
  color: ${({ theme }) => theme.kakaoText};
  border-color: ${({ theme }) => theme.kakaoBg};
  background-image: url(${KakaoIco});
`;
const AllChkBox = styled.div`
  margin-bottom: 13px;
  font-size: 1.125rem;
  @media ${({ theme }) => theme.mobile} {
    margin-bottom: 1.1538rem;
    font-size: 1.0769rem;
  }
`;
const AgreeListWrap = styled.ul`
  padding: 10px 16px;
  border: solid 1px #eee;
  @media ${({ theme }) => theme.mobile} {
    padding: 0.5769rem 1.1538rem;
  }
`;
const AgreeListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 0;
  span {
    display: inline-block;
    color: ${({ theme }) => theme.error};
    margin-right: 3px;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 0.5769rem 0;
  }
`;
const ADAgreeBox = styled(FlexBox)`
  padding: 19px 16px;
  border: solid 1px #eee;
  border-top: none;
  @media ${({ theme }) => theme.mobile} {
    padding: 1.1538rem;
  }
`;
