import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import item01Img from "@assets/img/list/item01.jpg";
import item02Img from "@assets/img/list/item02.jpg";
import item03Img from "@assets/img/list/item03.jpg";
import item04Img from "@assets/img/list/item04.jpg";
import item05Img from "@assets/img/list/item05.jpg";
import item06Img from "@assets/img/list/item06.jpg";
import item07Img from "@assets/img/list/item07.jpg";
import item08Img from "@assets/img/list/item08.jpg";
import { CategoryBadge } from "@style/badge/CategoryBadge";
import { SectTtl, SectTtlBox } from "@assets/style/fontStyle/title";
import GuideBtn from "@components/buttons/GuideBtn";
import ListSorting from "./ListSorting";
import { Subject, Text } from "@assets/style/fontStyle/Text";
import { CompanyName } from "@assets/style/component/Company";

const RecruitmentList = ({ category }) => {
  const viewLink = "/recruitment/view";
  const companyLink = "/recruitment/company";
  const data = [
    {
      link: viewLink,
      link2: companyLink,
      img: item01Img,
      title: "어나더베이비에서 애견미용사를 모시려합니다",
      name: "어나더베이비",
      category: "애견 미용실",
      categoryColor: "red",
    },
    {
      link: viewLink,
      link2: companyLink,
      img: item02Img,
      title: "VIP 동물의료센터 노원점 수의테크니션(동물간호사) 채용합니다",
      name: "브이아이피동물의료센터",
      category: "동물병원",
      categoryColor: "org",
    },
    {
      link: viewLink,
      link2: companyLink,
      img: item03Img,
      title: "보호소 상담사 동물관리 경력무관 채용합니다",
      name: "아이조아펫파크 대구점",
      category: "반려동물 관련업",
      categoryColor: "blue",
    },
    {
      link: viewLink,
      link2: companyLink,
      img: item04Img,
      title: "[이승진동물의료센터] 수의테크니션 모집(야간근무조)",
      name: "이승진동물의료센터",
      category: "동물병원",
      categoryColor: "org",
    },
    {
      link: viewLink,
      link2: companyLink,
      img: item05Img,
      title: "펫 매니저(애견미용, 행동교정, 수의테크니션)를 모집합니다.",
      name: "㈜브이아이펫",
      category: "반려동물 관련업",
      categoryColor: "blue",
    },
    {
      link: viewLink,
      link2: companyLink,
      img: item06Img,
      title: "[강동,송파] 도기프렌즈 애견유치원 실장 모집합니다.",
      name: "워킹페코",
      category: "학원",
      categoryColor: "purple",
    },
    {
      link: viewLink,
      link2: companyLink,
      img: item07Img,
      title: "몬테에서 카페업무 및 매장관리할 직원을 채용합니다",
      name: "아이조아펫파크 대구점",
      category: "애견카페",
      categoryColor: "green",
    },
    {
      link: viewLink,
      link2: companyLink,
      img: item08Img,
      title: "일산 대화동 애견 카페에서 함께 근무할 직원을 모집합니다.",
      name: "아이조아펫파크 대구점",
      category: "애견카페",
      categoryColor: "",
    },
  ];

  const Main = location.pathname == "/main";
  const View = location.pathname == "/recruitment/view";
  return (
    <>
      <SectTtlBox className="flex_b_c" main={Main}>
        <SectTtl>
          {View ? "박두병님, 이 포지션을 찾고 계셨나요?" : "프로채용 기업"}
        </SectTtl>
        {Main && <GuideBtn />}
      </SectTtlBox>
      <div className="item_list_wrap">
        {!Main ? !View ? <ListSorting category={category} /> : "" : ""}
        <RecruitmentListWrap
          className=" flex col_4 mo_col_2"
          style={{
            "--mg-x": "10px",
            "--mg-t": "40px",
            "--mo-mg-x": "5px",
            "--mo-mg-t": "30px",
          }}
        >
          {data.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
              </Link>
              <ItemInfo>
                <Text light>
                  <Link to={item.link2}>{item.name}</Link>
                </Text>
                <Subject Ell2>
                  <Link to={viewLink}>{item.title}</Link>
                </Subject>
                <CategoryBadge color={item.categoryColor}>
                  {item.category}
                </CategoryBadge>
              </ItemInfo>
            </li>
          ))}

          {category == "recruitment" ? moreList() : ""}
        </RecruitmentListWrap>
      </div>
    </>
  );
  function moreList() {
    return (
      <>
        {data.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <figure>
                <img src={item.img} alt={item.title} />
              </figure>
            </Link>
            <ItemInfo>
              <Text light>
                <Link to={item.link2}>{item.name}</Link>
              </Text>
              <Subject Ell2>
                <Link to={viewLink}>{item.title}</Link>
              </Subject>
              <CategoryBadge color={item.categoryColor}>
                {item.category}
              </CategoryBadge>
            </ItemInfo>
          </li>
        ))}
      </>
    );
  }
};

export default RecruitmentList;

const RecruitmentListWrap = styled.ul`
  li {
    figure {
      overflow: hidden;
      border-radius: 5px;
      position: relative;

      width: 100%;
      padding-top: 63.16%;
    }

    img {
      ${({ theme }) => theme.positionCenter};
      object-fit: cover;
    }
  }
`;

const ItemInfo = styled.div`
  margin-top: 20px;
  font-size: 15px;
  ${Subject} {
    margin: 10px 0 20px;
  }
  ${({ theme }) => theme.mobile} {
    font-size: 0.923rem;

    ${Subject} {
      margin-bottom: 1.0714em;
    }
  }
`;
