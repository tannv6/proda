import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";
import img01 from "@img/ex/exslide_img01.png";
import img02 from "@img/ex/exslide_img02.png";
import ico01 from "@img/ex/exico01.png";
import ico02 from "@img/ex/exico02.png";
import styled from "styled-components";
import { BtnMedium } from "@assets/style/button/Buttons";
import {
  CompanyIco,
  CompanyName,
  CompanySubject,
  CompanyTextWrap,
  CompanyWrap,
} from "@assets/style/component/Company";

export default class RecruitmentCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };

    const data = [
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img01,
        ico: ico01,
        company_name: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img02,
        ico: ico02,
        company_name: "VIO동물의료센터 수의테크니션",
        subject:
          " VIP 동물의료센터 노원점 수의테크니션 (동물간VIP 동물의료센터 노원점 수의테크니션 (동물간",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img01,
        ico: ico01,
        company_name: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img02,
        ico: ico02,
        company_name: "VIO동물의료센터 수의테크니션",
        subject:
          " VIP 동물의료센터 노원점 수의테크니션 (동물간VIP 동물의료센터 노원점 수의테크니션 (동물간",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img01,
        ico: ico01,
        company_name: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
      },
      {
        to: "/recruitment/view",
        toCompany: "/recruitment/company",
        bg: img02,
        ico: ico02,
        company_name: "VIO동물의료센터 수의테크니션",
        subject:
          " VIP 동물의료센터 노원점 수의테크니션 (동물간VIP 동물의료센터 노원점 수의테크니션 (동물간",
      },
    ];
    return (
      <RecruimentSlider {...settings}>
        {data.map((item, index) => (
          <Item key={index}>
            <ThumbImg to={item.to} bgImg={`${item.bg}`}></ThumbImg>
            <InfoRow>
              <CompanyWrap>
                <CompanyIco ico={item.ico} />
                <CompanyTextWrap>
                  <CompanyName small to={item.toCompany}>
                    {item.company_name}
                  </CompanyName>
                  <CompanySubject Ell1>
                    <Link to="/recruitment/view">{item.subject}</Link>
                  </CompanySubject>
                </CompanyTextWrap>
              </CompanyWrap>
              <DirectBtn lineLight>바로 지원하기</DirectBtn>
            </InfoRow>
          </Item>
        ))}
      </RecruimentSlider>
    );
  }
}
const RecruimentSlider = styled(Slider)`
  ${CompanyWrap} {
    width: calc(100% - 158px);
  }
  @media ${(props) => props.theme.mobile} {
    ${CompanyWrap} {
      width: 100%;
    }
  }
`;

const DirectBtn = styled(BtnMedium)`
  max-width: 138px;
  border-radius: 21px;
  @media ${(props) => props.theme.mobile} {
    max-width: 110px;
    font-size: 0.923rem;
    margin-top: 1.1538rem;
  }
`;

const Item = styled.div`
  > a {
    display: block;
  }
`;
const ThumbImg = styled(Link)`
  display: block;
  width: 100%;
  padding-top: 55.93%;
  background: url(${(props) => (props.bgImg ? props.bgImg : "")}) no-repeat
    center / cover;
`;
const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  @media ${(props) => props.theme.mobile} {
    display: block;
    margin-top: 1.1538rem;
  }
`;
