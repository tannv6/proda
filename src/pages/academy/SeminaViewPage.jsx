import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Tab from "@components/tab/Tab";
import ViewImg from "@img/ex/view_ex.jpg";
import ReturnBtn from "@components/buttons/ReturnBtn";
import { BtnBig } from "@assets/style/button/Buttons";
import { Container, Inner, Section } from "@assets/style/layout/Container";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import styled from "styled-components";
import { SectTtlBox, ViewTtl } from "@assets/style/fontStyle/title";
import { FlexBox } from "@assets/style/layout/Flex";
import facebook from "@img/ico/ico_sns_facebook.png";
import twitter from "@img/ico/ico_sns_twitter.png";
import kakaostory from "@img/ico/ico_sns_kakaostory.png";
import link from "@img/ico/ico_sns_link.png";
import facebook_on from "@img/ico/ico_sns_facebook_on.png";
import twitter_on from "@img/ico/ico_sns_twitter_on.png";
import kakaostory_on from "@img/ico/ico_sns_kakaostory_on.png";
import link_on from "@img/ico/ico_sns_link_on.png";
import { Tag, TagBox } from "@assets/style/component/Tag";
import { DescWrap, Subject } from "@assets/style/fontStyle/Text";

const SeminaViewPage = () => {
  const code = "academy";

  return (
    <>
      <Header />
      <ViewContainer>
        <Inner>
          <Tab code={code} />
        </Inner>
        <Section>
          <Inner>
            <ViewTopInfoBox>
              <BoardInfo>
                <SectTtlBox>
                  <ViewTtl bold>
                    [반려동물문화교실] 개와 함께 사는 그들의 토크 콘서트
                  </ViewTtl>
                </SectTtlBox>
                <InfoList>
                  <li>
                    <Subject>일시</Subject>
                    <DescWrap>2022년 02월 24일 (목) 13:30 ~ 16 :00</DescWrap>
                  </li>
                  <li>
                    <Subject>장소</Subject>
                    <DescWrap>온라인라이브</DescWrap>
                  </li>
                  <li>
                    <Subject>참가비</Subject>
                    <DescWrap>온라인라이브</DescWrap>
                  </li>
                </InfoList>
                <TagBox>
                  <Tag state="ing">모집중</Tag>
                  <Tag state="pay">유료</Tag>
                </TagBox>
              </BoardInfo>
              <ShareInfo>
                <FlexBox>
                  <FaceBookBtn />
                  <TwitterBtn />
                  <KakaostoryBtn />
                  <LinkBtn />
                </FlexBox>
                <ViewApplyBtn bgPoint rounded>
                  등록신청
                </ViewApplyBtn>
              </ShareInfo>
            </ViewTopInfoBox>
            <ViewContent>
              <figure>
                <img src={ViewImg} alt="" />
              </figure>
            </ViewContent>
            <ViewBtnWrap flexCenter>
              <ReturnBtn>목록으로</ReturnBtn>
            </ViewBtnWrap>
          </Inner>
        </Section>
      </ViewContainer>
      <Footer />
    </>
  );
};

export default SeminaViewPage;

const ViewContainer = styled(Container)`
  ${Section} {
    ${Inner} {
      border-top: solid 2px #252525;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    ${Section} {
      padding-bottom: 0;
    }
  }
`;
const ViewTopInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 30px 20px;
  border-bottom: solid 1px #eee;

  @media ${({ theme }) => theme.mobile} {
    display: block;
    padding: 1.923rem 0;

    ${ViewTtl} {
      font-size: 1.3846rem;
    }

    ${TagBox} {
      margin-top: 1.5384rem;
    }
  }
`;
const ViewApplyBtn = styled(BtnBig)`
  width: 247px;

  @media ${({ theme }) => theme.mobile} {
    width: 12.692rem;
    height: 3.4615rem;
  }
`;
const BoardInfo = styled.div`
  width: 65%;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;
const InfoList = styled.ul`
  width: 100%;

  li {
    display: flex;

    ${Subject} {
      width: 75px;
      line-height: 1.65;
    }

    ${DescWrap} {
      width: calc(100% - 75px);
      color: #999;
      line-height: 1.65;
    }
  }
`;
const ShareInfo = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    justify-content: start;
    align-items: start;
    ${FlexBox} {
      margin: 1.923rem 0;
    }
  }
`;

const SnsBtn = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #f9f9f9;
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  &:hover {
    background-color: ${({ theme }) => theme.color_point};
  }

  & + button {
    margin-left: 10px;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 45px;
    height: 45px;
  }
`;
const TwitterBtn = styled(SnsBtn)`
  background-image: url(${twitter});

  &:hover {
    background-image: url(${twitter_on});
  }
`;
const KakaostoryBtn = styled(SnsBtn)`
  background-image: url(${kakaostory});

  &:hover {
    background-image: url(${kakaostory_on});
  }
`;
const LinkBtn = styled(SnsBtn)`
  background-image: url(${link});

  &:hover {
    background-image: url(${link_on});
  }
`;
const FaceBookBtn = styled(SnsBtn)`
  background-image: url(${facebook});

  &:hover {
    background-image: url(${facebook_on});
  }
`;

const ViewContent = styled.div`
  padding: 60px 20px;

  img {
    margin: 0 auto;
    display: block;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 1.923rem 0;
  }
`;
const ViewBtnWrap = styled(BtnWrap)`
  margin-top: 0;
`;
