import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "@node/slick-carousel/slick/slick.css";
import "@node/slick-carousel/slick/slick-theme.css";

import img01 from "@img/ex/ex_viewimg.jpg";

const text = [
  "애견미용사 학원에서 학생이 미용을 배우는 장면",
  "애견미용사 학원에서 학생이 미용을 배우는 장면2",
  "애견미용사 학원에서 학생이 미용을 배우는 장면3",
  "애견미용사 학원에서 학생이 미용을 배우는 장면4",
  "애견미용사 학원에서 학생이 미용을 배우는 장면5",
];
export default class ViewCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <Slider {...settings}>
        <div>
          <figure>
            <img src={img01} alt={text[0]} />
          </figure>
        </div>
        <div>
          <figure>
            <img src={img01} alt={text[1]} />
          </figure>
        </div>
        <div>
          <figure>
            <img src={img01} alt={text[3]} />
          </figure>
        </div>
        <div>
          <figure>
            <img src={img01} alt={text[4]} />
          </figure>
        </div>
        <div>
          <figure>
            <img src={img01} alt={text[5]} />
          </figure>
        </div>
      </Slider>
    );
  }
}
