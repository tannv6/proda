import React, { useState } from "react";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ico from "@img/ico/com_ico32x32.jpg";
import ReturnBtn from "@components/buttons/ReturnBtn";
import DailyUserInfo from "@components/item/DailyUserInfo";
import { Container, Inner, Section } from "@assets/style/layout/Container";
import { SectTtlBox, ViewTtl } from "@assets/style/fontStyle/title";
import { DescWrap } from "@assets/style/fontStyle/Text";
import { FlexBox } from "@assets/style/layout/Flex";
import ViewState from "@components/ui/ViewState";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import etcIco from "@img/btn/etc_btn15x3.png";
import etcIcoMo from "@img/btn/etc_btn33x7.png";
import { BtnMedium } from "@assets/style/button/Buttons";

const DailyViewPage = () => {
  const code = "academy";
  const category = "daily";

  const commnetData = [
    {
      ico: ico,
      id: "crazy830727",
      date: "2022.04.18",
      text: " 신입으로 중소기업 입사한지 3주 됬는데 아직 근로계약서 작성을 안했습니다.",
    },
    {
      ico: ico,
      id: "crazy830727",
      date: "2022.04.18",
      text: " 신입으로 중소기업 입사한지 3주 됬는데 아직 근로계약서 작성을 안했습니다.",
    },
    {
      ico: ico,
      id: "crazy830727",
      date: "2022.04.18",
      text: " 신입으로 중소기업 입사한지 3주 됬는데 아직 근로계약서 작성을 안했습니다.",
    },
  ];

  return (
    <>
      <Header />
      <Container pt_0>
        <Section pt_1>
          <Inner>
            <ViewArea>
              <ViewTopInfo>
                <SectTtlBox>
                  <ViewTtl>
                    반려동물을 키우기 전에 신중하게 고려해야 할 8가지
                  </ViewTtl>
                </SectTtlBox>
                <DailyUserInfo ico={ico} id="crazy830727" date="2022.04.18" />
              </ViewTopInfo>
              <ViewContent>
                <DescWrap>
                  <p>
                    안녕하세요! 사회생활 15년차에 서비스 기획자로 12년을 달려온
                    직장인입니다. 그동안 많은 프로젝트에 참여하여 PM으로 PO로
                    리더로 근무를 했는데요. 돌이켜보면 기획자로서 전반기에
                    성취했던 결과나 만족을 후반기로 갈수록 체감하기가 어려워지는
                    것 같았습니다. 모든 것은 개인적인 책임에서 보면 제
                    역량부족이라는 생각이 들어 앞으로 어떤 자세로 일을 해야 할지
                    고민이 늘어만 가고 있습니다. 혹시 저와 같은 고민을 갖고 있는
                    분들은 이런 상황을 어떻게 대처하고 계신지 궁금하네요. 정답은
                    없지만 본인 환경에 맞춰 개인적인 대응이나 선택&#40;퇴사,
                    전직, 전업, 역량강화 등&#41;을 한다고 봤을때 같은 고민을
                    하는 분들의 이야기를 듣고 싶네요! :&#41;
                  </p>
                </DescWrap>
                <FlexBox flexBC>
                  <ViewState goodVal="2" reviewVal="3" />
                  <ETCBtn />
                </FlexBox>
              </ViewContent>
            </ViewArea>
            <CommentArea>
              <DailyUserInfo ico={ico} id="crazy830727" date="2022.04.18" />
              <InputWrap>
                <textarea
                  name=""
                  id=""
                  placeholder="내용을 입력해주세요."
                ></textarea>
                <BtnMedium lack rounded_2 bgPoint>
                  등록
                </BtnMedium>
              </InputWrap>
              <CommentList>
                {commnetData.map((item, index) => (
                  <li key={index}>
                    <FlexBox flexBC>
                      <DailyUserInfo
                        ico={item.ico}
                        id={item.id}
                        date={item.date}
                      />
                      <ETCBtn />
                    </FlexBox>
                    <DescWrap>{item.text}</DescWrap>
                  </li>
                ))}
              </CommentList>
            </CommentArea>

            <BtnWrap flexCenter momgt2>
              <ReturnBtn>목록으로</ReturnBtn>
            </BtnWrap>
          </Inner>
        </Section>
      </Container>
      <Footer />
    </>
  );
};
function ETCBtn() {
  return <ETCBtnStyle />;
}

export default DailyViewPage;

const ViewTopInfo = styled.div`
  padding-bottom: 30px;
  border-bottom: solid 1px #eee;
`;

const ViewContent = styled.div`
  padding: 30px 0;
  border-bottom: solid 1px #eee;

  ${DescWrap} {
    margin-bottom: 210px;
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 1.538rem 0 1.923rem;
    ${DescWrap} {
      margin-bottom: 4.615rem;
    }
  }
`;
const ViewArea = styled.article``;
const CommentArea = styled.article`
  padding-top: 30px;
  @media ${({ theme }) => theme.mobile} {
    padding-top: 1.538rem;
  }
`;
const InputWrap = styled.div`
  width: 100%;
  position: relative;
  margin-top: 13px;

  textarea {
    width: 100%;
    height: 180px;
    border-radius: 5px;
    resize: none;
    padding: 30px;
    overflow: hidden;

    &::placeholder {
      font-size: 18px;
      color: #ddd;
    }
  }

  ${BtnMedium} {
    max-width: 120px;
    border-radius: 21px;
    position: absolute;
    right: 21px;
    bottom: 21px;
  }
  @media ${({ theme }) => theme.mobile} {
    margin-top: 1.538rem;

    ${BtnMedium} {
      max-width: 7.6923rem;
      border-radius: 1.346rem;
      position: absolute;
      right: 1.1538rem;
      bottom: 1.1538rem;
    }
  }
`;
const CommentList = styled.ul`
  li {
    padding: 40px 0;
    border-bottom: solid 1px #eee;
  }
  ${DescWrap} {
    margin-top: 13px;
  }
  @media ${({ theme }) => theme.mobile} {
    li {
      padding: 1.5384rem 0;
    }
  }
`;

const ETCBtnStyle = styled.button`
  display: block;
  width: 20px;
  height: 20px;
  background: url(${etcIco}) no-repeat center center;
  @media ${({ theme }) => theme.mobile} {
    width: 1.269rem;
    height: 0.2692rem;
    background-image: url(${etcIcoMo});
    background-size: cover;
  }
`;
