import React from "react";
import { Link } from "react-router-dom";
import profileImg from "@img/sub/profile_bg.jpg";
import StarBtn from "@components/buttons/StarBtn";
import { Pager } from "@components/Pager";
import ListSorting from "./ListSorting";
import styled from "styled-components";
import { TableList, TableListItem } from "@assets/style/component/List";
import { Subject, Text } from "@assets/style/fontStyle/Text";
import ItemImg from "@components/item/Prolfile";
import { FlexBox } from "@assets/style/layout/Flex";

export default function SearchList({ category, view }) {
  const data = [
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
    {
      name: "이미지 설명",
      age: "23세",
      bgImg: profileImg,
      subj: "모든일에 있어서 긍정적 마인드로 최선을 다할 수 있습니다! ",
      career: "경력 3년 이상",
      job: "동물병원/관리직",
      reg: "서울 강남구/강동구/송파구",
      time: "9분전",
    },
  ];
  return (
    <>
      {view ? "" : <ListSorting category={category} />}

      <ProfileListWrap className="rowList profile_list">
        {data.map((item, index) => {
          return (
            <Item key={index}>
              <ItemImg img={item.bgImg}></ItemImg>
              <TextBox flexSC>
                <SubjectInfo>
                  <Subject Ell1 moEll2 mo_lh_lg>
                    <Link to="/search/view_resume">{item.subj}</Link>
                  </Subject>
                  <InfoText>
                    <SlideText light>{item.name}</SlideText>
                    <SlideText light>{item.age}</SlideText>
                    <SlideText>{item.career}</SlideText>
                  </InfoText>
                </SubjectInfo>
                <Job>
                  <p>{item.job}</p>
                </Job>
                <Area lack>
                  <p>{item.reg}</p>
                </Area>
                <Time lack>
                  <p>{item.time}</p>
                </Time>
                <StarWrap>
                  <StarBtn />
                </StarWrap>
              </TextBox>
            </Item>
          );
        })}
      </ProfileListWrap>
      <Pager curPage="1" totalPage="5" pageBtnNum="5" />
    </>
  );
}

const ProfileListWrap = styled(TableList)``;
const Item = styled(TableListItem)`
  padding: 30px 0;

  @media ${({ theme }) => theme.mobile} {
    padding: 1.3846rem 0;
  }
`;
const TextBox = styled(FlexBox)`
  width: calc(100% - 80px);
  @media ${({ theme }) => theme.mobile} {
    width: calc(100% - 5rem);
    display: block;
  }
`;

const SubjectInfo = styled.div`
  width: 51.6656%;
  text-align: left;
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    margin-bottom: 0.846rem;
  }
`;
const InfoText = styled(FlexBox)`
  margin-top: 12px;
  font-size: 15px;

  @media ${({ theme }) => theme.mobile} {
    margin-top: 0.5384rem;
    font-size: 0.923rem;
  }
`;
const SlideText = styled.span`
  display: inline-block;
  line-height: 1.2;
  color: ${(props) => (props.light ? "#757575" : "#252525")};
  & + span::before {
    content: "/";
  }
`;

const ItemInfoText = styled.div`
  font-size: ${(props) => (props.lack ? "14px" : "1rem")};
  color: ${(props) => (props.lack ? "#999" : "#252525")};
  @media ${({ theme }) => theme.mobile} {
    & + * {
      margin-top: 8px;
    }
    font-size: ${(props) => (props.lack ? "0.923rem" : "1rem")};

    width: 100% !important;
  }
`;

const Job = styled(ItemInfoText)`
  width: 16.667%;
`;
const Area = styled(ItemInfoText)`
  width: 15.334%;
`;
const Time = styled(ItemInfoText)`
  width: 9.1667%;
`;
const StarWrap = styled.div`
  width: 7.1667%;
  @media ${({ theme }) => theme.mobile} {
    margin-top: 12px;
  }
`;
