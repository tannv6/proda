import React, { useState } from "react";
import { Mobile } from "@components/Responsive";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ViewCarousel from "@components/carousel/RecruitmentViewCarousel";
import RecruitmentList from "@components/list/RecruitmentList";
import { Container, Inner } from "@assets/style/layout/Container";
import ApplyPop from "@components/popup/ApplyPop";
import { ApplyBtn } from "@assets/style/button/ApplyBtn";
import BookMarkBtn from "@components/buttons/BookMarkBtn";
import HeartBtn from "@components/buttons/HeartBtn";
import ShareBtn from "@components/buttons/ShareBtn";
import downBtn from "@img/btn/down_btn_112x30.png";
import openBtn from "@img/btn/open_btn_112x30.png";
import Arrow from "@img/btn/arrow_20x12.png";
import ArrowUp from "@img/btn/arrow_down_20x12.png";
import styled, { css } from "styled-components";
import { ViewTtl } from "@assets/style/fontStyle/title";
import { CategoryBadge } from "@style/badge/CategoryBadge";
import {
  CompanyCategory,
  CompanyIco,
  CompanyName,
  CompanyTextWrap,
  CompanyWrap,
} from "@assets/style/component/Company";

const RecruitmentViewPage = () => {
  const [preview, setPreview] = useState(false);
  const [sharePop, setSharePop] = useState(false);
  const category = "recruitment";
  return (
    <>
      <Header />
      <Container>
        <section>
          <Inner className="flex_b_s">
            <Left>
              <ViewCarousel />
              <ViewInfoTop />
              <ViewInfoBot />
            </Left>
            <ViewRight setPreview={setPreview} setSharePop={setSharePop} />
          </Inner>
        </section>
        <MoreSect>
          <Inner>
            <RecruitmentList category={category} />
          </Inner>
        </MoreSect>
      </Container>
      {preview ? (
        <ApplyPop setPreview={setPreview} setSharePop={sharePop} />
      ) : null}
      <Footer />
    </>
  );
};

const ViewInfoTop = () => {
  return (
    <ViewTop>
      <ViewTtl big marginBottom="20px" mobileMarginBottom="1.1538rem">
        어나더베이비에서 애견미용사를 모시려 합니다
      </ViewTtl>
      <ItemInfo>
        <span className="com_name">어나더베이비</span>
        <span className="region">서울</span>
        <Badge color="red">애견 미용실</Badge>
      </ItemInfo>
      <ViewTopDesc>
        애견산업은 반려견의 위생제품 및 각종 용품들을 취급하는 제 1위 기업로
        발돋음 하기 위해 최선을 다하고 있습니다. 발빠른 애견산업에 민감하고
        신속하게 대응하기 위해 전 사원들이 노력중입니다.
      </ViewTopDesc>

      <ConditionList>
        <dl>
          <dt>주요업무</dt>
          <dd>반려동물 진료 보조</dd>
          <dd>매장 관리</dd>
          <dd>애견미용</dd>
        </dl>

        <dl>
          <dt>자격요건</dt>
          <dd>경력 : 경력 1년 이상</dd>
          <dd>인근거주자, 해당직무 근무경험</dd>
        </dl>
      </ConditionList>
    </ViewTop>
  );
};

const ViewInfoBot = () => {
  const [dropDown, setDropDown] = useState();
  return (
    <ViewInfoBottom>
      <ViewInfo>
        <dl>
          <dt>마감일</dt>
          <dd>2022.02.04</dd>
        </dl>
        <dl>
          <dt>근무지역</dt>
          <dd>서울특별시 구로구 디지털로</dd>
        </dl>
      </ViewInfo>

      <Map>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6332.222390173638!2d126.88751272629695!3d37.481702298803874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e24138ba17b%3A0x46790617736f528a!2z7ISc7Jq47Yq567OE7IucIOq1rOuhnOq1rCDrlJTsp4DthLjroZwyNuq4uA!5e0!3m2!1sko!2skr!4v1673338497164!5m2!1sko!2skr"
          border="0"
        ></iframe>
        {/* <iframe src="" width="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe> */}
      </Map>

      <CompanyWrap margin="30px 0 20px">
        <CompanyIco />
        <CompanyTextWrap>
          <CompanyName to="/recruitment/company">어나더베이비</CompanyName>
          <CompanyCategory>애견미용실</CompanyCategory>
        </CompanyTextWrap>
      </CompanyWrap>
      <CompanyBottom dropDown={dropDown} onClick={() => setDropDown(!dropDown)}>
        <Summary dropDown={dropDown}>
          <span>
            본 채용정보는 프로다의 동의없이 무단전재, 재배포, 재가공할
            수 없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
          </span>
        </Summary>
        {dropDown && (
          <CompanyDesc>
            본 채용 정보는 업체명에서 제공한 자료를 바탕으로 프로다에서 표현을
            수정하고 이의 배열 및 구성을 편집하여 완성한 프로다의 저작자산 이자
            영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는 전부에 대하여
            프로다의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수
            없으며, 게재된 채용기업의 정보는 구직자의 구직활동 이외의 용도로
            사용될 수 없습니다. 프로다는 업체명에서 게재한 자료에 대한 오류나 그
            밖에 프로다가 가공하지 않은 정보의 내용상 문제에 대하여 어떠한
            보장도 하지 않으며, 사용자가 이를 신뢰하여 취한 조치에 대해 책임을
            지지 않습니다. &lt;저작권자 ㈜마이주주. 무단전재-재배포금지 &gt;
          </CompanyDesc>
        )}
      </CompanyBottom>
    </ViewInfoBottom>
  );
};

const ViewRight = ({ setPreview, setSharePop }) => {
  const [toggle, setToggle] = useState();
  const [active, setActive] = useState();
  const handlePreview = () => {
    setPreview(true);
    setSharePop(false);
  };
  const handleShare = () => {
    setSharePop(true);
    setPreview(true);
    setActive(!active);
  };

  return (
    <>
      <Right active={toggle}>
        <RightInfo>
          <Mobile>
            <RightToggle
              onClick={() => setToggle(!toggle)}
              active={toggle}
            ></RightToggle>
          </Mobile>
          <RightCompanyInfo>
            <dl>
              <dt>급여 : </dt>
              <dd>면접 후 결정</dd>
            </dl>
            <dl>
              <dt>근무형태 : </dt>
              <dd>정규직</dd>
            </dl>
            <dl>
              <dt>근무시간 : </dt>
              <dd>09:00 ~ 18:00</dd>
            </dl>
          </RightCompanyInfo>

          <ApplyBtn onClick={() => handlePreview()}>지원하기</ApplyBtn>
          <RightUxMenu className="flex_c_c">
            <li>
              <BookMarkBtn text />
            </li>
            <li>
              <ShareBtn
                text
                active={active}
                onClick={() => handleShare()}
              ></ShareBtn>
            </li>
            <li>
              <HeartBtn number="12345" />
            </li>
          </RightUxMenu>
        </RightInfo>
      </Right>
    </>
  );
};

const MoreSect = styled.section`
  margin-top: 80px;

  @media ${(props) => props.theme.mobile} {
    margin-top: 3.0769rem;
  }
`;
const Left = styled.div`
  width: calc(100% - 360px);
  .slick-slider {
    .slick-slide {
      figure {
        border-radius: 5px;
        overflow: hidden;
      }
    }

    .slick-arrow {
      &.slick-prev {
        left: 40px;
      }

      &.slick-next {
        right: 40px;
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    .slick-slider {
      .slick-slide {
        figure {
          border-radius: 5px;
          overflow: hidden;
        }
      }

      .slick-arrow {
        width: 2.6923rem;
        height: 2.6923rem;

        &.slick-prev {
          left: 1.5384rem;
        }

        &.slick-next {
          right: 1.5384rem;
        }
      }
    }
  }
`;
const RightToggle = styled.button`
  display: block;
  width: 56px;
  height: 15px;
  position: absolute;
  top: -14.5px;
  left: 50%;
  transform: translateX(-50%);
  background: url(${(props) => (props.active ? openBtn : downBtn)}) no-repeat
    center center/cover;
`;

const RightInfo = styled.div`
  padding: 34px 20px;

  @media ${(props) => props.theme.mobile} {
    padding: 20px 15px;
    position: relative;
  }
`;

const RightCompanyInfo = styled.div`
  dl {
    display: flex;
    align-items: center;

    & + dl {
      margin-top: 15px;
    }

    dt,
    dd {
      font-weight: 500;
      line-height: 1.2;
    }

    dd {
      margin-left: 3px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    dl {
      display: flex;
      align-items: center;

      & + dl {
        margin-top: 7px;
      }

      dd {
        margin-left: 3px;
      }
    }
  }
`;

const RightUxMenu = styled.ul`
  li {
    width: auto;
    padding: 0 10px;
    position: relative;

    & + li::before {
      content: "";
      width: 1px;
      height: 16px;
      background: #eee;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  }
`;

const Right = styled.div`
  width: 340px;
  position: sticky;
  top: 110px;
  border-radius: 5px;
  border: solid 1px #dbdbdb;

  ${ApplyBtn} {
    margin: 40px auto 30px;
    max-width: none;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    border-radius: 0;
    border-color: #dadada;
    z-index: 10;
    ${ApplyBtn} {
      margin: 20px auto 15px;
      box-shadow: none;
    }

    ${(props) =>
      props.active &&
      css`
        ${ApplyBtn} {
          margin: 0;
        }
        ${RightCompanyInfo},
        ${RightUxMenu} {
          display: none;
        }
      `}
  }
`;
const Badge = styled(CategoryBadge)`
  margin-left: 10px;
`;

const CompanyDesc = styled.div`
  line-height: 1.7;
  word-break: keep-all;
  color: #999;
  padding: 20px 0;
  border-top: solid 1px #eee;
`;
const Summary = styled.div`
  padding: 20px 0;
  background: url(${(props) => (props.dropDown ? ArrowUp : Arrow)}) no-repeat
    right center;
  cursor: pointer;
  span {
    display: block;
    line-height: 1.3;
    color: #454545;
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const CompanyBottom = styled.div`
  padding: 0 20px;
  border: solid 1px #dbdbdb;
  font-size: 14px;
`;

// view top

const ViewTop = styled.div`
  margin-top: 40px;
  @media ${(props) => props.theme.mobile} {
    margin-top: 1.5384rem;
  }
`;
const ItemInfo = styled.div`
  font-size: 20px;
  .com_name {
    color: #454545;
  }

  .region {
    margin-left: 8px;
    padding-left: 9px;
    color: #999;
    position: relative;

    &::before {
      content: "|";
      font-size: 12px;
      color: #ddd;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 1.1538rem;
  }
`;
const ViewTopDesc = styled.div`
  font-size: 18px;
  color: #757575;
  line-height: 1.5;
  margin-top: 20px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    margin-top: 1.1538rem;
  }
`;
const ConditionList = styled.div`
  margin-top: 60px;

  dl {
    & + dl {
      margin-top: 40px;
    }

    dt {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    dd {
      font-size: 18px;
      line-height: 1.5;
      color: #757575;

      &::before {
        content: "-";
        font-size: 18px;
        color: #757575;
        margin-right: 5px;
      }
    }
    }
    @media ${(props) => props.theme.mobile} {
      margin-top: 1.923rem;

      dl {
        & + dl {
          margin-top: 1.923rem;
        }

        dt {
          font-size: 1.1538rem;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        dd {
          font-size: 1.0769rem;
        }

  }
`;

// viewBot
const ViewInfoBottom = styled.div`
  border-top: solid 1px #dbdbdb;
  padding: 40px 0 0;
  margin-top: 40px;
  font-size: 18px;
  @media ${(props) => props.theme.mobile} {
    padding-top: 1.923rem;
    margin-top: 2.3076rem;
    font-size: 1.0769rem;
  }
`;
const ViewInfo = styled.div`
  margin-bottom: 35px;

  dl {
    display: flex;
    align-items: center;

    & + dl {
      margin-top: 20px;
    }

    dt {
      width: 80px;
      color: #757575;
    }

    dd {
      width: calc(100% - 80px);
      font-size: 18px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 1.923rem;

    dl {
      & + dl {
        margin-top: 0.7692rem;
      }

      dt {
        width: 5.3846rem;
      }

      dd {
        width: calc(100% - 80px);
        font-size: inherit;
      }
    }
  }
`;

const Map = styled.div`
  position: relative;
  width: 100%;
  padding-top: 54.76%;

  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media ${(props) => props.theme.mobile} {
    position: relative;
    width: 100%;
    padding-top: 54.76%;

    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
export default RecruitmentViewPage;
