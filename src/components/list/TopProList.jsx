import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import silhouetteImg from "@img/main/silhouette_img.png";
import StarBtn, { StarStyled } from "@components/buttons/StarBtn";
import styled from "styled-components";
import { SectTtl, SectTtlBox } from "@assets/style/fontStyle/title";
import GuideBtn from "@components/buttons/GuideBtn";
import { MoreBtn } from "@components/buttons/ReturnBtn";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import ItemImg from "@components/item/Prolfile";
import { Subject } from "@assets/style/fontStyle/Text";

const TopProList = () => {
  const location = useLocation();
  const data = [
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
    {
      link: "#!",
      img: silhouetteImg,
      title: "경력 3년 이상",
      name: "박 O O",
      info: "동물병원/실장",
      area: "서울 강남구/강동구/송파구",
    },
  ];
  const Main = location.pathname == "/main";
  return (
    <>
      <SectTtlBox className="flex_b_c" main={Main}>
        <SectTtl>TOP 프로</SectTtl>
        <GuideBtn />
      </SectTtlBox>
      <CardList
        className="flex col_4 tablet_col_2 mo_col_1"
        style={{
          "--mg-x": "10px",
          "--mg-t": "20px",
          "--ta-mg-x": "10px",
          "--ta-mg-t": "20px",
          "--mo-mg-t": "14px",
        }}
      >
        {data.map((item, index) => (
          <CardItem key={index}>
            <Link to={item.link}>
              <ItemImg img={item.img}></ItemImg>
              <InfoBox>
                <Subject>{item.title}</Subject>
                <p className="name">{item.name}</p>
                <p className="info">{item.info}</p>
                <p className="area">{item.area}</p>
              </InfoBox>
            </Link>
            <StarBtn />
          </CardItem>
        ))}
      </CardList>
      <BtnWrap flexCenter>
        <MoreBtn />
      </BtnWrap>
    </>
  );
};

const CardList = styled.ul`
  ${StarStyled} {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  @media ${(props) => props.theme.mobile} {
    ${StarStyled} {
      top: 15px;
      right: 15px;
    }
  }
`;
const CardItem = styled.li`
  min-height: 150px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  border-radius: 5px;
  position: relative;

  > a {
    ${({ theme }) => theme.flexSC};
    ${({ theme }) => theme.flexWrap};
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  @media ${(props) => props.theme.mobile} {
    min-height: auto;
    border-radius: 2.5px;
  }
`;
const InfoBox = styled.div`
  p {
    line-height: 1.2;

    & + * {
      margin-top: 8px;
    }
    &.name {
      color: #757575;
      font-size: 0.9375rem;
      margin-bottom: 12px;
    }

    &.area {
      color: #999;
      font-size: 0.875rem;
    }
  }
  @media ${(props) => props.theme.mobile} {
    p {
      & + * {
        margin-top: 0.6153rem;
      }
      &.name {
        font-size: 1rem;
        margin-bottom: 12px;
      }

      &.area {
        font-size: 0.923rem;
      }
    }
  }
`;
export default TopProList;
