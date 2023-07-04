import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import BookMarkBtn, {
  BookMarkBtnStyled,
} from "@components/buttons/BookMarkBtn";
import { BtnSmall } from "@assets/style/button/Buttons";
import { CompanyName, CompanySubject } from "@assets/style/component/Company";
import arrow from "@img/btn/slide_arrow18x30.png";
import moArrow from "@img/btn/slide_arrow16x24.png";
import { FlexBox } from "@assets/style/layout/Flex";
import { Mobile } from "@components/Responsive";

function NextArrow(props) {
  const { className, onClick } = props;
  return <NextArrowStyled className={className} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return <ArrowStyled className={className} onClick={onClick} />;
}

export default class ApplyPopCarousel extends Component {
  state = {
    activeSlide: 1,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next + 1 }),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
          },
        },
      ],
    };

    const data = [
      {
        company_name: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
        condition: "신입/서울",
        date: "D-20",
      },
      {
        company_name: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
        condition: "신입/서울",
        date: "D-20",
      },
      {
        company_name: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
        condition: "신입/서울",
        date: "D-20",
      },
      {
        company_name: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
        condition: "신입/서울",
        date: "D-20",
      },
      {
        company_name: "어나더베이비",
        subject: "어나더베이비에서 애견미용사를 모시려합니다",
        condition: "신입/서울",
        date: "D-20",
      },
    ];

    return (
      <>
        <MoreTop>
          <p>이 공고에도 지원해보세요.</p>
          <CountWrap flexEC>
            <Mobile>
              <PrevArrow />
            </Mobile>
            <span>{this.state.activeSlide}/3</span>
            <Mobile>
              <NextArrow />
            </Mobile>
          </CountWrap>
        </MoreTop>
        <SliderBox>
          <Slider {...settings}>
            {data.map((item, index) => (
              <ItemSect key={index}>
                <ItemTop>
                  <CompanyName small>{item.company_name}</CompanyName>
                  <CompanySubject lh_lg>
                    <Link to="/recruitment/view">{item.subject}</Link>
                  </CompanySubject>
                </ItemTop>
                <ItemBottom>
                  <span>{item.condition}</span>
                  <BottomWrap>
                    <FlexBox flexSC>
                      <ImmediatelyBtn />
                      <Date>{item.date}</Date>
                    </FlexBox>
                    <BookMarkBtn />
                  </BottomWrap>
                </ItemBottom>
              </ItemSect>
            ))}
          </Slider>
        </SliderBox>
      </>
    );
  }
}

const SliderBox = styled.div`
  width: calc(100% + 20px);
  margin-left: -10px;
  .slick-slide {
    padding: 0 10px;
  }
  .slick-arrow {
    width: 18px;
    height: 30px;
    transform: translateY(-50%);
    &::before {
      background-image: url(${arrow});
    }
    &.slick-next {
      right: 0;
      transform: translateY(-50%) rotate(180deg);
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: calc(100% + 0.7692rem);
    margin-left: -0.3846rem;
    .slick-slide {
      padding: 0 0.3846rem;
    }
    .slick-arrow {
      display: none;
    }
  }
`;
const MoreTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 18px;
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 1.1538rem;
    font-size: 1.0769rem;
  }
`;
const CountWrap = styled(FlexBox)`
  font-size: 14px;
  color: #454545;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.923rem;
    * + * {
      margin-left: 10px;
    }
  }
`;
const ItemSect = styled.div`
  border: solid 1px #ddd;
  border-radius: 5px;
  padding: 0 20px;
  position: relative;

  @media ${(props) => props.theme.mobile} {
    border-radius: 0.3846rem;
    padding: 0 1.1538rem;
    ${BookMarkBtnStyled} {
      position: absolute;
      right: 0.884rem;
      top: 1.1538rem;
    }
  }
`;

const ItemTop = styled.div`
  padding: 30px 0;
  a {
    display: block;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 1.538rem 0;
  }
`;
const ItemBottom = styled.div`
  z-index: 100;
  padding: 20px 0 30px;
  border-top: solid 1px #eee;
  > span {
    display: inline-block;
    font-size: 14px;
    color: #999;
    margin-bottom: 19px;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 1.1538rem 0 1.5384rem;
    > span {
      font-size: 0.923rem;
      margin-bottom: 1.1538rem;
    }
  }
`;
const BottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Date = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: #454545;
  @media ${(props) => props.theme.mobile} {
    margin-left: 7px;
    font-size: 0.923rem;
  }
`;
const ApplyImmediatelyBtn = styled(BtnSmall)`
  max-width: 110px;
  text-align: center;
  border-radius: 15.5px;
  font-size: 0.9375rem;
  height: 30px;
  @media ${(props) => props.theme.mobile} {
    max-width: 6.6153rem;
    font-size: 1rem;
    border-radius: 1.34615rem;
    height: 2.6923rem;
  }
`;
const ArrowStyled = styled.button`
  display: block;
  width: 8px;
  height: 12px;
  background: url(${moArrow}) no-repeat center / contain;
`;
const NextArrowStyled = styled(ArrowStyled)`
  transform: rotate(180deg);
`;

const ImmediatelyBtn = () => {
  return <ApplyImmediatelyBtn bgPoint>즉시지원</ApplyImmediatelyBtn>;
};
