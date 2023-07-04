import React, { useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Popup from "@components/popup/Popup";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import { ResumeBtn } from "@assets/style/button/ResumeBtns";
import styled, { css } from "styled-components";
import { Container, Inner, Section } from "@assets/style/layout/Container";
import { SectTtl, SectTtlBox, ViewTtl } from "@assets/style/fontStyle/title";
import profileImgBig from "@img/sub/profile_120x120.jpg";
import { FlexBox } from "@assets/style/layout/Flex";
import SearchList from "@components/list/SearchList";

const SearchViewPage = () => {
  const category = "search";
  const popSubTtl = (
    <>
      이력서 열람 상품을 이용하시면 <br /> 전체 내용 확인 및 포지션 제안을 하실
      수 있습니다
    </>
  );
  const [login, setLogin] = useState(0);

  const [preview, setPreview] = useState(false);

  const hadlePopOpen = () => {
    setPreview(!preview);
  };
  return (
    <>
      <Header />
      <ViewContainer>
        <section>
          <Inner>
            <ViewTtlBox>
              <ViewTtl big>
                회사의 아주 작은 일도 집안일처럼 살뜰하게 보살피는 매니져, 바로
                접니다.
              </ViewTtl>
            </ViewTtlBox>
            {/* 이 인재의 모든 정보가 궁금하세요? */}
            <ResumeRecommend onClick={hadlePopOpen} />
            <ViewWrap>
              {/* 인재의 프로필 */}
              <ResumeProfile login={login} />
              {/* 회사소개 */}
              <ResumeBox label="회사소개">
                <BoxInner>
                  <ResumeBoxList colNum="3">
                    <li>
                      <p className="date">2014. 03 ~2018. 08</p>
                      <p className="title">
                        <strong>{login ? "이화여자대학교" : "○○○○○○○"}</strong>
                      </p>
                      <p className="summary">
                        조형예술대학 의류학(주전공), 인문과학대학
                        미술사학(복수전공)
                      </p>
                    </li>
                  </ResumeBoxList>
                </BoxInner>
              </ResumeBox>
              {/* 경력 */}
              <ResumeBox label="경력" addLabel="경력 3년 이상">
                <BoxInner login={login}>
                  {login ? (
                    <ResumeBoxList>
                      <li>
                        <p className="date">2014. 03 ~ 재직중</p>
                        <p className="title">○○○○○○○</p>
                        <p className="summary">A&amp;R팀 사원 팀원 </p>
                      </li>
                    </ResumeBoxList>
                  ) : (
                    <BlindBox>
                      <p className="title">
                        김 ○○님은 <b>최근 ○○○○ 테크니션</b>으로 근무 하였습니다.
                      </p>
                      <p className="text">
                        이력서 열람 상품을 이용하시면, 경력 사항 전체 내용을
                        확인 할 수 있습니다.
                      </p>
                      <ResumeAloneBtnWrap>
                        <ResumeBtn lack alone bgBlue>
                          경력사항 확인하기
                        </ResumeBtn>
                      </ResumeAloneBtnWrap>
                    </BlindBox>
                  )}
                </BoxInner>
              </ResumeBox>
              {/* 수상내역 */}
              <ResumeBox label="수상내역">
                <BoxInner>
                  <ResumeBoxList>
                    <li>
                      <p className="date">2014. 03 ~2018. 08</p>
                      <p className="title">
                        <strong>엠케이퍼블리싱</strong>
                      </p>
                      <p className="summary">인터넷정보진흥원</p>
                    </li>
                  </ResumeBoxList>
                </BoxInner>
              </ResumeBox>
              {/* 자기소개서 */}
              <ResumeBox label="자기소개서">
                <BoxInner login={login}>
                  {login ? (
                    <Introduction>
                      <IntroductionInner>
                        <h3 className="title">자기소개서</h3>
                        <p className="summary">
                          안녕하세요. 김유정입니다. 저는 엄격한 어머니와 다정한
                          아버지 밑에서 자랐으며, 4남 1녀로 장녀로 태어났습니다.
                          건강한 신체에 건강한 정신이 깃든다는 마인드 속에
                          자라서.
                        </p>
                      </IntroductionInner>
                      <PSBox>
                        <p>
                          본 내용은 개인신상정보 보호를 위해 개인회원이 직접
                          작성한 총 <span>500</span> 내용 중 일부만 발췌한
                          것입니다.
                        </p>
                        <ResumeAloneBtnWrap>
                          <ResumeBtn lack alone bgBlue>
                            전체내용 확인하기
                          </ResumeBtn>
                        </ResumeAloneBtnWrap>
                      </PSBox>
                    </Introduction>
                  ) : (
                    <BlindBox>
                      <p>
                        김 ○○님은 <b> 501자의 자기소개서</b>를 작성하였습니다.
                      </p>
                      <p className="text">
                        이력서 열람 상품을 이용하시면, 경력 사항 전체 내용을
                        확인 할 수 있습니다.
                      </p>
                      <ResumeAloneBtnWrap>
                        <ResumeBtn
                          lack
                          alone
                          bgBlue
                          onClick={() => setLogin(!login)}
                        >
                          자기소개서 확인하기
                        </ResumeBtn>
                      </ResumeAloneBtnWrap>
                    </BlindBox>
                  )}
                </BoxInner>
              </ResumeBox>
              {/* 희망근무조건 */}
              <ResumeBox label="희망근무조건">
                <BoxInner p_0>
                  <ResumeTable>
                    <tbody>
                      <tr>
                        <th>희망직종</th>
                        <td>동물병원/매니져</td>
                      </tr>
                      <tr>
                        <th>희망근무지</th>
                        <td>서울전지역</td>
                      </tr>
                      <tr>
                        <th>희망연봉</th>
                        <td>면접 후 결정</td>
                      </tr>
                    </tbody>
                  </ResumeTable>
                </BoxInner>
              </ResumeBox>
              <ViewBottomWrap>
                <p>위의 모든 기재사항은 사실과 다름없음을 확인합니다.</p>
                <p>작성자 : 김 ○○</p>
                <div className="check_guide">
                  <p>
                    이 이력서는 2022년 03월 25일 (금)에 최종 업데이트된 이력서
                    입니다. 위조된 문서를 등록하여 취업활동에 이용 시 법적
                    책임을 지게 될 수 있습니다.
                  </p>
                  <p>
                    프로다는 구직자가 등록 한 문서에 대해 보증하거나 별도의
                    책임을 지지 않으며 첨부된 문서를 신뢰하여 발생한 법적 분쟁에
                    책임을 지지 않습니다.
                  </p>
                  <p>
                    또한 구인/구직 목적 외 다른 목적으로 이용 시 이력서 삭제
                    혹은 비공개 조치가 될 수 있습니다.
                  </p>
                </div>
              </ViewBottomWrap>
            </ViewWrap>
            {/* 이 인재의 모든 정보가 궁금하세요? */}
            <ResumeRecommend onClick={hadlePopOpen} mgb_0 />
          </Inner>
        </section>
        <Section pt_1>
          <Inner>
            <SectTtlBox>
              <SectTtl>지금 본 이력서와 유사해요</SectTtl>
            </SectTtlBox>
            <SearchList category={category} view={true} />
          </Inner>
        </Section>
        {preview ? (
          <Popup
            ttl="이력서 열람 상품 이용 신청하기"
            subTtl={popSubTtl}
            setPreview={setPreview}
            name={category}
          />
        ) : (
          ""
        )}
      </ViewContainer>
      <Footer />
    </>
  );
};
function ResumeRecommend({ onClick, mgb_0 }) {
  return (
    <RecommendBox flexBC moBlock mgb_0={mgb_0}>
      <RecommendText>
        <p>이 인재의 모든 정보가 궁금하세요?</p>
        <p className="stl">
          이력서 열람 상품을 이용하시면, <span>전체내용 확인</span>과
          <span>포지션 제안</span>을 하실 수 있습니다.
        </p>
      </RecommendText>
      <BtnWrap m_0 flexCenter>
        <ResumeBtn lack bgPoint>
          연락처 확인
        </ResumeBtn>
        <ResumeBtn lack onClick={onClick} bgBlue>
          포지션 제안하기
        </ResumeBtn>
      </BtnWrap>
    </RecommendBox>
  );
}
function ResumeBox({ label, addLabel, children }) {
  return (
    <Article>
      <ResumeContTtl>
        {label}
        {addLabel ? <span>{addLabel}</span> : ""}
      </ResumeContTtl>
      {children}
    </Article>
  );
}
export function ResumeProfile({ login }) {
  return (
    <ProfileContainer moBlock>
      <ProfileImgBox>
        <ProfileImg
          style={{ backgroundImage: `url(${profileImgBig})` }}
        ></ProfileImg>
        <CheckBtn pic />
      </ProfileImgBox>
      <ProfileTextBox>
        <ProfileTextTop>
          <span className="name">김 O O</span>
          <span className="age">27세 </span>
        </ProfileTextTop>
        <ProfileTextBot>
          <li>
            <p className="label">휴대폰</p>
            <div className="value">
              <CheckBtn />
            </div>
          </li>
          <li>
            <p className="label">Email</p>
            <div className="value">
              <CheckBtn />
            </div>
          </li>
          <li>
            <p className="label">전화번호</p>
            <div className="value">
              <CheckBtn />
            </div>
          </li>
          {login ? (
            <li>
              <p className="label">주소</p>
              <div className="value">
                <p>서울 송파구</p>
                <CheckBtn />
              </div>
            </li>
          ) : (
            ""
          )}
        </ProfileTextBot>
      </ProfileTextBox>

      <ProfileBotttom>
        <li>
          <p className="label">학력</p>
          <div className="value">
            {login ? (
              <>
                <p class="subject">이화여자대학교</p>
                <p class="blue">대학교(4년)</p>
              </>
            ) : (
              <CheckBtn />
            )}
          </div>
        </li>
        <li>
          <p className="label">경력</p>
          <div className="value">
            {login ? (
              <>
                <p class="subject">○○○○○○○</p>
                <p class="blue">1년 ~ 3년</p>
              </>
            ) : (
              <CheckBtn />
            )}
          </div>
        </li>
        <li>
          <p className="label">수상내역</p>
          <div className="value">
            <p className="subject">엠케이퍼블리싱 외 2건</p>
            {login ? (
              <>
                <p>대학교(4년)</p>
              </>
            ) : (
              ""
            )}
          </div>
        </li>
      </ProfileBotttom>
    </ProfileContainer>
  );
}

const CheckBtn = ({ pic }) => {
  return <Check type="button">{pic ? "사진보기" : "확인하기"}</Check>;
};

const Check = styled.button`
  display: inline-block;
  color: #454545;
  border-bottom: solid 1px #454545;
`;

const ViewWrap = styled.div`
  padding: 50px 50px 80px;
  background: #f2f4f7;

  p {
    color: #454545;
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 1.5384rem 1.1538rem;
  }
`;

const ViewBottomWrap = styled.div`
  padding: 60px 0 0;
  text-align: center;
  > p {
    font-size: 20px;
    color: #454545;
    word-break: keep-all;
    line-height: 1.9;
  }
  .check_guide {
    margin-top: 40px;
    p {
      font-size: 14px;
      color: #999999;
      line-height: 1.7;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 2.6923rem 0 1.1538rem;
    > p {
      font-size: 1.15384rem;
      line-height: 1.466;
    }
    .check_guide {
      margin-top: 1.5384rem;
      p {
        font-size: 0.923rem;
        line-height: 1.5;
      }
    }
  }
`;
const RecommendBox = styled(FlexBox)`
  margin: 20px 0 ${(props) => props.mgb_0 && "0"};
  padding: 30px 20px;
  flex-wrap: wrap;
  border: solid 1px #dbdbdb;
  @media ${({ theme }) => theme.mobile} {
    padding: 1.923rem 1.1538rem;
  }
`;

const RecommendText = styled.div`
  p {
    font-size: 18px;
    color: #454545;
    &.stl {
      font-size: 15px;
      color: #999;
      margin-top: 10px;
      line-height: 1.5;
      span {
        color: var(${({ theme }) => theme.color_blue2});
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    p {
      font-size: 1.0769rem;
      &.stl {
        font-size: 0.923rem;
        line-height: 1.5;
      }
    }
  }
`;

const ResumeContTtl = styled(SectTtl)`
  margin-bottom: 20px;

  & + * {
    width: 100%;
    border-top: solid 2px #252525;
  }
  span {
    display: inline-block;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 400;
    color: var(${({ theme }) => theme.color_blue2});
  }
  @media ${({ theme }) => theme.mobile} {
  }
`;

const ProfileContainer = styled(FlexBox)`
  flex-wrap: wrap;
  background-color: transparent !important;
  > * {
    background-color: #fff;
  }
  ul {
    li {
      p {
        line-height: 1.2;

        &.label {
          color: #999;
        }
        &.subject {
          color: #252525;
        }
        &.blue {
          color: var(${({ theme }) => theme.color_blue2});
        }
      }
    }
  }

  @media ${({ theme }) => theme.mobile} {
    > * + * {
      margin-top: 10px;
    }
    ul {
      li {
        p {
          line-height: 1.2;
          &.label {
            color: #999;
          }
          &.subject {
            color: #252525;
          }
          &.blue {
            color: var(${({ theme }) => theme.color_blue2});
          }
        }
      }
    }
  }
`;

const ProfileImgBox = styled.div`
  width: 180px;
  padding: 40px 30px;
  margin-right: 10px;
  background: #fff;
  text-align: center;

  ${Check} {
    margin-top: 20px;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 1.5384rem;
    ${Check} {
      margin-top: 15px;
    }
  }
`;
const ProfileImg = styled.figure`
  width: 120px;
  height: 120px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  overflow: hidden;
  border: solid 1px #eee;
  margin: 0 auto;
  @media ${({ theme }) => theme.mobile} {
    width: 6.5384rem;
    height: 6.5384rem;
  }
`;

const ProfileTextBox = styled.div`
  width: calc(100% - 190px);
  padding: 50px 40px;
  @media ${({ theme }) => theme.mobile} {
    padding: 1.5384rem;
  }
`;

const ProfileTextTop = styled.div`
  margin-bottom: 20px;
  .name {
    font-weight: 500;
    font-size: 20px;
  }
  .age {
    font-size: 15px;
    color: #757575;
    margin-left: 10px;
  }
  @media ${({ theme }) => theme.mobile} {
    margin-bottom: 1.1538rem;
    .name {
      font-size: 1.1538rem;
    }
    .age {
      font-size: 0.923rem;
      margin-left: 5px;
    }
  }
`;

const ProfileTextBot = styled.ul`
  display: flex;
  align-item: start;
  flex-wrap: wrap;

  li {
    width: 50%;
    display: flex;
    align-item: start;
    padding: 10px 0;

    ${Check} {
      margin-top: 0;
    }

    .label {
      width: 80px;
      position: relative;

      &::after {
        content: "";
        width: 1px;
        height: 14px;
        background-color: #eee;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }
    }
    .value {
      p {
        display: inline-block;
      }
      > * {
        margin-left: 14px;
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    display: block;
    li {
      width: 100%;
      padding: 5px 0;

      .label {
        width: 55px;
        position: relative;

        &::after {
          height: 12px;
          width: 1px;
          background-color: #eee;
          position: absolute;
          top: 0.5em;
          right: 0;
          content: "";
        }
      }
      .value {
        > * {
          margin-left: 10px;
        }
      }
    }
  }
`;

const ProfileBotttom = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 10px;
  min-height: 210px;
  padding: 55px 0;
  li {
    width: 33.33%;
    text-align: center;
    position: relative;

    &:last-of-type::after {
      display: none;
    }
    &::after {
      content: "";
      width: 1px;
      height: 100%;
      background-color: #eee;
      position: absolute;
      top: 0;
      right: 0;
    }

    .label {
      margin-bottom: 20px;
    }
    .value {
      > * {
        margin-top: 10px;
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 1.5384rem;
    min-height: unset;
    display: block;

    li {
      width: 100%;
      padding: 5px 0;
      text-align: left;
      display: flex;
      align-item: start;

      &::after {
        display: none;
      }

      .label {
        margin-bottom: 0;
        width: 55px;
        flex-shrink: 0;
        position: relative;

        &::after {
          content: "";
          height: 12px;
          width: 1px;
          background-color: #eee;
          position: absolute;
          top: 0.5em;
          right: 0;
        }
      }

      .value {
        p {
          display: inline-block;
        }
        > * {
          margin-top: 0;
          margin-left: 10px;
        }
      }
    }
  }
`;

const Article = styled.article`
  margin-top: 40px;

  div,
  ul {
    background-color: #fff;
  }
  @media ${({ theme }) => theme.mobile} {
    margin-top: 2.307rem;
    p {
      text-align: left;
      line-height: 1.5384;
    }
  }
`;
const ResumeBoxList = styled.ul`
  li {
    display: flex;
    align-item: center;
    color: #454545;

    & + li {
      margin-top: 20px;
    }

    p {
      line-height: 1.3;
    }

    .date {
      width: 190px;
    }
    .title {
      width: 180px;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    li {
      display: block;

      .date {
        width: 100%;
      }
      .title {
        width: 100%;
        margin: 12px 0;
      }
    }
  }
`;
const ResumeTable = styled.table`
  width: 100%;
  table-layout: fixed;
  tr {
    border-bottom: solid 1px #dbdbdb;
    th {
      background: #fafafa;
      width: 200px;
    }
    td {
      padding: 17.25px 20px;
      text-align: left;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    tr {
      th {
        width: 6.7307rem;
      }
      td {
        padding: 1.1538rem;
        text-align: left;
      }
    }
  }
`;

const BoxInner = styled.div`
  background: #fff;

  ${(props) =>
    props.p_0
      ? css`
          padding: 0;
        `
      : props.login
      ? css`
          min-height: 230px;
          padding: 60px 30px;
        `
      : `padding: 40px;
  min-height: 160px;
  `}
  @media ${({ theme }) => theme.mobile} {
    ${(props) =>
      props.p_0
        ? css`
            padding: 0;
          `
        : ` padding: 1.5384rem;
        min-height: unset;`}
  }
`;

const ViewTtlBox = styled.div`
  border-bottom: solid 2px #252525;
  padding-bottom: 30px;

  @media ${({ theme }) => theme.mobile} {
    padding-bottom: 1.5384rem;
  } ;
`;

const ViewContainer = styled(Container)`
  padding-top: 60px;
  @media ${({ theme }) => theme.mobile} {
    padding-top: 2.3076rem;
  } ;
`;
const ResumeAloneBtnWrap = styled(BtnWrap)`
  margin-top: 30px;
  @media ${({ theme }) => theme.mobile} {
    margin-top: 1.1538rem;
    text-align: left;
  } ;
`;

const BlindBox = styled.div`
  text-align: center;

  .text {
      margin-top: 20px;
      color:#999999;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    .text {
      font-size: 1.0769rem;
      margin-top: 1.5384rem;
    }
  }
`;

const Introduction = styled.div``;

const PSBox = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 50px;

  p {
    color: #999999;
    span {
      color: ${({ theme }) => theme.color_blue2};
    }
  }
  @media ${({ theme }) => theme.mobile} {
    margin-top: 1.1538rem;
    font-size: 0.923rem;
  }
`;

const IntroductionInner = styled.div`
  .title {
    font-size: 20px;
    color: #252525;
  }
  .summary {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.555;
    color: #757575;
  }
  @media ${({ theme }) => theme.mobile} {
    .title {
      font-size: 1.1538rem;
    }
    .summary {
      margin-top: 0.76923rem;
      font-size: 1.0769rem;
    }
  }
`;
export default SearchViewPage;
