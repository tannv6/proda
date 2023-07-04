import React from "react";
import { Link } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import BookMarkBtn from "@components/buttons/BookMarkBtn";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import { Button } from "@assets/style/button/Buttons";
import styled from "styled-components";
import { DescWrap } from "@assets/style/fontStyle/Text";
import { SectTtl, SectTtlBox } from "@assets/style/fontStyle/title";
import {
  CompanyIco,
  CompanyName,
  CompanyWrap,
} from "@assets/style/component/Company";
import { Container, Inner } from "@style/layout/Container";

import img01 from "@img/main/item01.jpg";
import img02 from "@img/main/item02.jpg";
import img03 from "@img/main/item03.jpg";
import img04 from "@img/main/item04.jpg";

const CompanyContainer = styled(Container)`
  padding-top: 0;
`;
const CompanyInfoBox = styled(CompanyWrap)`
  padding: 16px 0;
  border-bottom: solid 1px #eee;
  margin: 0;
`;

const RecruitmentCompanyPage = () => {
  return (
    <>
      <Header />
      <CompanyContainer>
        <Inner>
          <CompanyInfoBox>
            <CompanyIco />
            <CompanyName big>어나더베이비</CompanyName>
          </CompanyInfoBox>
          <CompanyPosition />
          <CompanyIntroduce />
        </Inner>
      </CompanyContainer>
      <Footer />
    </>
  );
};

export function CompanyPosition() {
  const data = [
    {
      subj: "어나더베이비에서 가족같은 애견미용사 를 모시려 합니다",
      date: "2022.01.12까지",
    },
    { subj: "애견미용실 사무장님 구합니다.", date: "2022.01.12까지" },
    {
      subj: "어나더베이비에서 가족같은 애견미용사 를 모시려 합니다",
      date: "2022.01.12까지",
    },
    {
      subj: "어나더베이비에서 가족같은 애견미용사 를 모시려 합니다",
      date: "2022.01.12까지",
    },
    {
      subj: "어나더베이비에서 가족같은 애견미용사 를 모시려 합니다",
      date: "상시채용",
    },
  ];
  return (
    <PositionSect>
      <SectTtlBox>
        <SectTtl>채용 중인 포지션</SectTtl>
      </SectTtlBox>
      <ItemWrap className="flex col_3 mo_col_1">
        {data.map((i, index) => (
          <Item key={index}>
            <ItemTextBox>
              <Subject>{i.subj}</Subject>
              <Date>{i.date}</Date>
            </ItemTextBox>
            <BookMarkBtn />
          </Item>
        ))}
      </ItemWrap>
      <BtnWrap flexCenter mgt="30px">
        <PositionMoreBtn>더 많은 포지션 보기 +</PositionMoreBtn>
      </BtnWrap>
    </PositionSect>
  );
}

export function CompanyIntroduce() {
  const data = [
    { bgImg: img01, title: "어나더베이비에서 애견미용사를 모시려합니다" },
    {
      bgImg: img02,
      title: "VIP 동물의료센터 노원점 수의테크니션(동물간호사) 채용합니다",
    },
    { bgImg: img03, title: "보호소 상담사 동물관리 경력무관 채용합니다" },
    {
      bgImg: img04,
      title: "[이승진동물의료센터] 수의테크니션 모집(야간근무조)",
      moreView: true,
    },
  ];
  return (
    <section>
      <SectTtlBox>
        <SectTtl>회사소개</SectTtl>
      </SectTtlBox>
      <CompanyImgWrap className="flex col_4 mo_col_2">
        {data.map((item, index) => (
          <>
            <CompanyImgItem key={index}>
              {item.moreView && <DimBtn />}
              <Thumb
                style={{ backgroundImage: `url(${item.bgImg})` }}
                title={item.title}
              ></Thumb>
            </CompanyImgItem>
          </>
        ))}
      </CompanyImgWrap>
      <DescWrap marginTop>
        <p>
          애견산업은 반려견의 위생제품 및 각종 용품들을 취급하는 제 1위 기업로
          발돋음 하기 위해 최선을 다하고 있습니다.
        </p>
        <p>
          발빠른 애견산업에 민감하고 신속하게 대응하기 위해 전 사원들이
          노력중입니다.
        </p>
      </DescWrap>
    </section>
  );

  function DimBtn() {
    return (
      <DimBtnStyled>
        <span>더보기+</span>
      </DimBtnStyled>
    );
  }
}

// 채용중인 포지션
// styled
const PositionMoreBtn = styled(Button)`
  max-width: 320px;
`;
const PositionSect = styled.div`
  padding: 60px 0;
  @media ${(props) => props.theme.mobile} {
    padding: 1.923rem 0 3.0769rem;
  }
`;
const ItemWrap = styled.ul`
  --mg-x: 10px;
  --mg-t: 20px;

  @media ${(props) => props.theme.mobile} {
    --mo-mg-t: 1.1538rem;
  }
`;
const Item = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
  border-radius: 5px;
  border: solid 1px #dbdbdb;
  @media ${(props) => props.theme.mobile} {
    padding: 1.5384rem 1.1538rem;
  }
`;

const ItemTextBox = styled.div`
  max-width: calc(100% - 46px);
  @media ${(props) => props.theme.mobile} {
    max-width: calc(100% - 4.6153rem;);
  }
`;
const Subject = styled(Link)`
  width: 100%;
  line-height: 1.3em;
  height: 2.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 18px;
  font-weight: 500;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
  }
`;

const Date = styled.p`
  font-size: 14px;
  color: #999;
  margin-top: 25px;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.923rem;
    margin-top: 1.1538rem;
  }
`;

//회사소개
// styled
const CompanyImgWrap = styled.ul`
  --mg-x: 10px;
  --mg-t: 0;
  @media ${(props) => props.theme.mobile} {
    --mo-mg-x: 0.3846rem;
    --mo-mg-t: 0.7692rem;
  }
`;

const CompanyImgItem = styled.li`
  position: relative;
`;
const Thumb = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 63.16%;
  border-radius: 5px;
  background: no-repeat center center/cover;
`;
const DimBtnStyled = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  color: #fff;
`;

export default RecruitmentCompanyPage;
