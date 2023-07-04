import React, { Component } from "react";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";
import banner from "@img/main/main_banner.jpg";
import bannerMo from "@img/main/mobile_banner.png";
import styled from "styled-components";
import { Mobile, Pc } from "@components/Responsive";

export default class MainSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    const data = [
      { img: banner, imgMo: bannerMo },
      { img: banner, imgMo: bannerMo },
      { img: banner, imgMo: bannerMo },
    ];

    return (
      <>
        <BotBanner>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <Mobile>
                  <img src={item.imgMo} alt="" />
                </Mobile>
                <Pc>
                  <img src={item.img} alt="" />
                </Pc>
              </div>
            ))}
          </Slider>
        </BotBanner>
      </>
    );
  }
}

const BotBanner = styled.div`
  overflow: hidden;
  margin-top: 90px;
  .slick-dots {
    display: flex !important;
    text-align: left;
    position: absolute;
    width: 100%;
    left: 7.5%;
    bottom: 15%;
    li {
      width: 8px;
      height: 8px;
      margin: 0;

      button {
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;
        padding: 0;

        &::before {
          display: none;
        }
      }

      & + li {
        margin-left: 10px;
      }

      &.slick-active {
        button {
          background-color: ${({ theme }) => theme.color_point};
        }
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    margin-top: 4.6153rem;
    .slick-dots {
      display: flex !important;
      text-align: left;
      position: absolute;
      width: 100%;
      left: 7.5%;

      bottom: 44.74%;
      li {
        width: 0.5384rem;
        height: 0.5384rem;

        button {
          width: 0.5384rem;
          height: 0.5384rem;
        }

        & + li {
          margin-left: 10px;
        }

        &.slick-active {
          button {
            background-color: ${({ theme }) => theme.color_point};
          }
        }
      }
    }
  }
`;
