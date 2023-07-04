import React from "react";
import { Link } from "react-router-dom";

import daily01 from "@img/sub/daily_list01.jpg";
import daily02 from "@img/sub/daily_list02.jpg";
import daily03 from "@img/sub/daily_list03.jpg";
import userIco01 from "@img/sub/userIco01.jpg";
import userIco02 from "@img/sub/userIco02.jpg";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import { MoreBtn } from "@components/buttons/ReturnBtn";
import styled from "styled-components";
import { FlexBox } from "@assets/style/layout/Flex";
import { Subject, Summary } from "@assets/style/fontStyle/Text";
import DailyUserInfo from "@components/item/DailyUserInfo";
import ViewState, { StateWrap } from "@components/ui/ViewState";

const DailyList = () => {
  const data = [
    {
      userIcon: userIco01,
      userId: "craz7830727",
      date: "2022.04.18",
      subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지",
      desc: "지난 연말부터 정치권에서는 두 사람의 이혼설이 계속 흘러나왔다. 그러나 지난 3월 안 전 지사의 부친상에 민씨가 참석하면서 이는 단순 소문이라고 알려지기도 했다. 그러나 두 사람의 최측근은 “이혼을 했지만 부부로 산 세월이 긴...",
      dailyImg: daily01,
      goodNum: 1,
      commentNum: 12,
    },
    {
      userIcon: "",
      userId: "craz7830727",
      date: "2022.04.18",
      subj: "대기업에서 발령받고 3일만에 퇴사했습니다....",
      desc: "대기업이라고 좋아했는데 생각보다 처우가 좋지 않더라구요. 그래서 그냥 3일만에 사직서 올리고 퇴사했습니다. ",
      dailyImg: "",
      goodNum: 1,
      commentNum: 12,
    },
    {
      userIcon: userIco02,
      userId: "craz7830727",
      date: "2022.04.18",
      subj: "이거 이렇게 하는게 맞는건지 모르겟네 ㅎㅎ",
      desc: "안녕하세요! 프로다에 처음 가입해봤어요~~ ㅎㅎㅎㅎ 앞으로 잘 부탁해용",
      dailyImg: "",
      goodNum: 1,
      commentNum: 12,
    },
    {
      userIcon: "",
      userId: "craz7830727",
      date: "2022.04.18",
      subj: "집에서 상추 키우기 어떠세요? 씨앗은 저희가 드릴께요",
      desc: "집에서 상추 키우기 어떠세요? 씨앗은 저희가 드릴께요",
      dailyImg: daily02,
      goodNum: 1,
      commentNum: 12,
    },
    {
      userIcon: "",
      userId: "craz7830727",
      date: "2022.04.18",
      subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지",
      desc: "지난 연말부터 정치권에서는 두 사람의 이혼설이 계속 흘러나왔다. 그러나 지난 3월 안 전 지사의 부친상에 민씨가 참석하면서 이는 단순 소문이라고 알려지기도 했다. 그러나 두 사람의 최측근은 “이혼을 했지만 부부로 산 세월이 긴...",
      dailyImg: "",
      goodNum: 1,
      commentNum: 12,
    },
    {
      userIcon: "",
      userId: "craz7830727",
      date: "2022.04.18",
      subj: "대기업에서 발령받고 3일만에 퇴사했습니다....",
      desc: "집에 돌아오는 길에  참 여러가지 생각이 들더군요.부모님께는 뭐라고 말씀드려야 할지 벌써 답답합니다.  ",
      dailyImg: daily03,
      goodNum: 1,
      commentNum: 12,
    },
    {
      userIcon: "",
      userId: "craz7830727",
      date: "2022.04.18",
      subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지",
      desc: "지난 연말부터 정치권에서는 두 사람의 이혼설이 계속 흘러나왔다. 그러나 지난 3월 안 전 지사의 부친상에 민씨가 참석하면서 이는 단순 소문이라고 알려지기도 했다. 그러나 두 사람의 최측근은 “이혼을 했지만 부부로 산 세월이 긴...",
      dailyImg: "",
      goodNum: 1,
      commentNum: 12,
    },
    {
      userIcon: "",
      userId: "craz7830727",
      date: "2022.04.18",
      subj: "반려동물을 키우기 전에 신중하게 고려해야 할 8가지",
      desc: "지난 연말부터 정치권에서는 두 사람의 이혼설이 계속 흘러나왔다. 그러나 지난 3월 안 전 지사의 부친상에 민씨가 참석하면서 이는 단순 소문이라고 알려지기도 했다. 그러나 두 사람의 최측근은 “이혼을 했지만 부부로 산 세월이 긴...",
      dailyImg: "",
      goodNum: 1,
      commentNum: 12,
    },
  ];

  return (
    <>
      <BoxList className="boxList">
        {data.map((item, index) => {
          return (
            <>
              <ListItem key={index}>
                <DailyUserInfo
                  ico={item.userIcon}
                  id={item.userId}
                  date={item.date}
                />
                <FlexBox moBlock>
                  <TextBox flexBC img={item.dailyImg ? true : null}>
                    <Subject bold xl Ell1 moEll2>
                      <Link to="/academy/daily_view">{item.subj}</Link>
                    </Subject>
                    <Summary gray lh_lg Ell2>
                      <p>{item.desc}</p>
                    </Summary>
                  </TextBox>
                  {item.dailyImg && (
                    <ThumbBox>
                      <Thumb
                        style={{ backgroundImage: `url(${item.dailyImg})` }}
                      ></Thumb>
                    </ThumbBox>
                  )}
                </FlexBox>
                <ViewState reviewVal={item.commentNum} goodVal={item.goodNum} />
              </ListItem>
            </>
          );
        })}
      </BoxList>
      <BtnWrap flexCenter>
        <MoreBtn />
      </BtnWrap>
    </>
  );
};

export default DailyList;

const BoxList = styled.ul`
  ${Subject} {
    margin-bottom: 20px;
  }
  ${Summary} {
    margin-bottom: 20px;
  }
  ${FlexBox} {
    margin-top: 35px;
  }

  @media ${(props) => props.theme.mobile} {
    ${Subject} {
      margin-bottom: 1.1538rem;
    }
    ${Summary} {
      margin-bottom: 1.1538rem;
    }
    ${FlexBox} {
      margin-top: 1.1538rem;
    }
    ${StateWrap} {
      margin-top: 0.8846rem;
    }
  }
`;
const ListItem = styled.li`
  margin-top: 20px;
  border-radius: 5px;
  padding: 40px;
  border: solid 1px #dbdbdb;
  box-shadow: 8px 6px 10px rgba(17, 16, 16, 0.05);

  @media ${(props) => props.theme.mobile} {
    margin-top: 1.1538rem;
    border-radius: 0.1923rem;
    padding: 1.1538rem 1.1538rem 1.538rem;
    box-shadow: 0.3076rem 0.2307rem 0.3846rem rgba(17, 16, 16, 0.05);
  }
`;
const TextBox = styled.div`
  width: ${(props) => (props.img ? "calc(100% - 200px)" : "100%")};

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const ThumbBox = styled.figure`
  width: 180px;
  margin-left: 20px;
  border-radius: 5px;
  overflow: hidden;
  @media ${(props) => props.theme.mobile} {
    width: 12.6923rem;
    margin-left: 0;
    margin-top: 1.1538rem;
    border-radius: 0.1923rem;
  }
`;
const Thumb = styled.span`
  display: block;
  width: 100%;
  padding-top: 66.67%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${(props) => props.theme.mobile} {
  }
`;
