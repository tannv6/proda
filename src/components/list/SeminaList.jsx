import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import seminaImg01 from "@img/sub/semina_list01.jpg";
import seminaImg02 from "@img/sub/semina_list02.jpg";
import seminaImg03 from "@img/sub/semina_list03.jpg";
import seminaImg04 from "@img/sub/semina_list04.jpg";
import seminaImg05 from "@img/sub/semina_list05.jpg";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import { MoreBtn } from "@components/buttons/ReturnBtn";
import { ListItem, RowList } from "@assets/style/layout/List";
import { Subject } from "@assets/style/fontStyle/Text";
import { FlexBox } from "@assets/style/layout/Flex";
import { Tag, TagBox } from "@assets/style/component/Tag";

export default function SeminaList() {
  const data = [
    {
      id: 1,
      info1: "",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg01,
      subj: "[반려동물문화교실] 개와 함께 사는 그들의 토크 콘서트",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 2,
      info1: "done",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg02,
      subj: "돈 잘 버는 애견미용사로 취업하기",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 3,
      info1: "ing",
      info2: "pay",
      title: "이미지 설명",
      bgImg: seminaImg03,
      subj: "[반려동물문화교실] 개와 함께 사는 그들의 토크 콘서트",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 4,
      info1: "ing",
      info2: "pay",
      title: "이미지 설명",
      bgImg: seminaImg04,
      subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 5,
      info1: "ing",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg05,
      subj: "[서울특별시 특별강연] 피곤한 개가 행복하다! 반려지식, 급 충전",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 6,
      info1: "ing",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg01,
      subj: "반려동물과 함께하는 행복한 삶",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 7,
      info1: "done",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg02,
      subj: "[서울 반려동물 시민학교] 댕댕아! 냥이야! 우리같이 학교가자!",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 8,
      info1: "ing",
      info2: "pay",
      title: "이미지 설명",
      bgImg: seminaImg03,
      subj: "반려동물 체중 관리 온라인 아카데미에 동물병원 스탭분들을 초대합니다.",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 9,
      info1: "ing",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg04,
      subj: "[반려동물문화교실] 개와 함께 사는 그들의 토크 콘서트",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
    {
      id: 10,
      info1: "done",
      info2: "free",
      title: "이미지 설명",
      bgImg: seminaImg05,
      subj: "동물과 행복하게 반려동물과 동행하기",
      date: "2022년 02월 24일 (목) 13:30 ~ 16 :00",
    },
  ];
  return (
    <>
      <RowList className="academy_list">
        {data.map((item, index) => {
          let tag1;
          let tag2;
          let tagText1;
          let tagText2;
          if (item.info1 == "done") {
            tag1 = "done";
            tagText1 = "마감";
          } else {
            tag1 = "ing";
            tagText1 = "모집중";
          }

          if (item.info2 == "free") {
            tag2 = "free";
            tagText2 = "무료";
          } else {
            tag2 = "pay";
            tagText2 = "유료";
          }

          return (
            <SeminaItem
              flexSC
              active={item.info1}
              key={index}
              data-href={item.info2}
            >
              <ThumbBox>
                <Thumb
                  style={{ backgroundImage: `url(${item.bgImg})` }}
                  title={item.title}
                ></Thumb>
              </ThumbBox>
              <ItemInfoWrap>
                <Subject lg Ell1>
                  <Link to="/academy/semina_view">{item.subj}</Link>
                </Subject>
                <p className="date">{item.date}</p>
                <TagBox>
                  <Tag state={tag1}>{tagText1}</Tag>
                  <Tag state={tag2}>{tagText2}</Tag>
                </TagBox>
              </ItemInfoWrap>
            </SeminaItem>
          );
        })}
      </RowList>
      <BtnWrap flexCenter>
        <MoreBtn>더보기</MoreBtn>
      </BtnWrap>
    </>
  );
}
const Thumb = styled.span`
  background: no-repeat center / cover;
  display: block;
  width: 100%;
  padding-top: 66.67%;
`;
const ThumbBox = styled.figure`
  width: 180px;
  flex: 0 0 auto;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 20px;
  flex-shrink: 0;
  @media ${(props) => props.theme.mobile} {
    width: 9.2307rem;
    border-radius: 0.1923rem;
    margin-right: 1.1538rem;
  }
`;

const SeminaItem = styled(ListItem)`
  padding: 20px 10px;

  ${(props) =>
    props.done &&
    css`
    ${Thumb}{
      filter: grayscale(100%);
  `}
  @media ${(props) => props.theme.mobile} {
    padding: 1.5384rem 0;
    flex-align: start;
  }
`;
const ItemInfoWrap = styled.div`
  width: calc(100% - 200px);
  .date {
    color: #999;
    margin-top: 10px;
  }
  @media ${(props) => props.theme.mobile} {
    width: calc(100% - 10.3846rem);
  }
`;
