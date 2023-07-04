import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";
import ComIco from "@img/ico/com_ico32x32.jpg";
import { SectTtl, SectTtlBox } from "@assets/style/fontStyle/title";
import { Subject } from "@assets/style/fontStyle/Text";
import { Inner } from "@assets/style/layout/Container";

export default class ChoiceCarousel extends Component {
  state = {
    activeSlide: 1,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next + 1 }),
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
        to: "/academy/academy_view",
        toCompany: "/employ/employ_comp",
        ico: ComIco,
        category: "세미나",
        com: "프로다",
        subject: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지",
      },
      {
        to: "/academy/academy_view",
        toCompany: "/employ/employ_comp",
        ico: ComIco,
        category: "취업꿀팁",
        com: "프로다",
        subject: `[서울특별시 특별강연] 피곤한 개 가 행복하다! 반려지식,
        급 충전`,
      },
      {
        to: "/academy/academy_view",
        toCompany: "/employ/employ_comp",
        ico: ComIco,
        category: "공지사항",
        com: "프로다",
        subject: `[서울특별시 특별강연] 피곤한 개 가 행복하다! 반려지식,
        급 충전`,
      },
    ];

    return (
      <>
        <ChoiceSect>
          <Inner>
            <SectTtlBox className="flex_b_c">
              <SectTtl big>프로다's 선택</SectTtl>
              <Fraction>
                <span>{this.state.activeSlide}/8</span>
              </Fraction>
            </SectTtlBox>
            <ChoiceSlider {...settings}>
              {data.map((item, index) => {
                let categoryCode;
                if (item.category == "세미나") {
                  categoryCode = "sem";
                } else if (item.category == "공지사항") {
                  categoryCode = "nti";
                } else if (item.category == "취업꿀팁") {
                  categoryCode = "tip";
                }

                return (
                  <ChoiceItem className={`item ${categoryCode}`} key={index}>
                    <Category>{item.category}</Category>
                    <Subject Ell2>
                      <Link to={item.to}>{item.subject}</Link>
                    </Subject>
                    <CompanySummary to={item.toCompany}>
                      <span
                        style={{ backgroundImage: `url(${item.ico})` }}
                      ></span>
                      {item.com}
                    </CompanySummary>
                  </ChoiceItem>
                );
              })}
            </ChoiceSlider>
          </Inner>
        </ChoiceSect>
      </>
    );
  }
}

const ChoiceSect = styled.section`
  padding: 60px 0 90px;
  @media ${(props) => props.theme.mobile} {
    padding: 3.0769rem 0;
  }
`;

const ChoiceSlider = styled(Slider)`
  .slick-list {
    height: 200px;

    .slick-slide {
      padding: 0 10px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: calc(100% + 5vw);
    margin-left: -1.3888vw;
    overflow: hidden;

    .slick-list {
      overflow: visible;
      height: auto;

      .slick-slide {
        padding: 0 1.3888vw;
        width: 58.333vw !important;
      }
    }
  }
`;
const Category = styled.p`
  color: #999;
  margin-bottom: 15px;
`;
const Fraction = styled.div`
  font-size: 18px;
  color: #454545;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
  }
`;
const ChoiceItem = styled.div`
  padding: 30px 25px 34px 20px;
  border-radius: 5px;
  &.sem {
    background: #eff5ff;
  }

  &.nti {
    background: #fffeef;
  }

  &.tip {
    background: #f0ffef;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 1.923rem 1.1538rem 1.923rem;
    border-radius: 5px;
  }
`;

const CompanySummary = styled(Link)`
  margin-top: 30px;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: solid 1px #eee;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 13px;
  }
  @media ${(props) => props.theme.mobile} {
  }
`;
