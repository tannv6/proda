import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Tab from "@components/tab/Tab";
import ChoiceCarousel from "@components/carousel/ChoiceCarousel";
import DailyList from "@components/list/DailyList";
import { ContainerTtl, ContainerTtlBox } from "@assets/style/fontStyle/title";
import { Container, Inner } from "@assets/style/layout/Container";
import writeBtn from "@img/btn/write_btn70x70.png";
import write_ico from "@img/btn/write_btn_ico.png";
import img from "@img/sub/profile_bg.jpg";
import { ItemImgBox } from "@components/item/Prolfile";

const DailyListPage = () => {
  const code = "academy";

  return (
    <>
      <Header />
      <Container>
        <Inner>
          <Tab code={code} />
        </Inner>
        <ChoiceCarousel />
        <section>
          <Inner>
            <ContainerTtlBox>
              <ContainerTtl big notoSans>
                일상
              </ContainerTtl>
            </ContainerTtlBox>
            <DailyWriteTop>
              <ProfileImg img={img} />
              <InputBox>
                <textarea></textarea>
                <span className="placeholder">
                  커리어와 라이프스타일에 대해 자유롭게 이야기 해주세요!
                </span>
                <WriteBtn></WriteBtn>
              </InputBox>
            </DailyWriteTop>
            {/* 일상리스트 */}

            <DailyList />
          </Inner>
          <WriteFollowBtn active>
            <Link to="/academy/daily_write"></Link>
          </WriteFollowBtn>
        </section>
      </Container>
      <Footer />
    </>
  );
};

const WriteFollowBtn = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 111;
  bottom: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  a {
    display: block;
    width: 70px;
    height: 70px;
    position: absolute;
    right: 30px;
    bottom: 40px;
    border-radius: 50%;
    background: url(${writeBtn}) no-repeat center;
    font-size: 0;
    box-shadow: 8px 6px 10px rgba(0, 0, 0, 0.13);
  }

  @media ${(props) => props.theme.mobile} {
    a {
      width: 4.2307rem;
      height: 4.2307rem;
      right: 1.1538rem;
      bottom: 7.6923rem;
      background-size: cover;
      box-shadow: 0.3076rem 0.2307rem 0.3846rem rgba(0, 0, 0, 0.13);
    }
  }
`;

const DailyWriteTop = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: solid 1px #eee;
  @media ${(props) => props.theme.mobile} {
  }
`;

const ProfileImg = styled(ItemImgBox)`
  margin-right: 30px;

  @media ${(props) => props.theme.mobile} {
    margin-right: 10px;
    width: 4.2307rem;
    height: 4.2307rem;
  }
`;

const InputBox = styled.div`
  height: 62px;
  width: calc(100% - 90px);

  position: relative;
  textarea {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: solid 1px #dbdbdb;
    border-radius: 5px;
    padding: 22px 0 20px 20px;
    z-index: 5;
    background-color: transparent;
    resize: none;
    overflow: hidden;
  }
  textarea:focus {
    background-color: #fff;
  }
  .placeholder {
    position: relative;
    display: block;
    z-index: 0;
    height: 100%;
    padding: 22px 0 20px 20px;
    color: #ddd;
  }
  @media ${(props) => props.theme.mobile} {
  }
`;
const WriteBtn = styled.button`
  display: block;
  width: 62px;
  height: 62px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  background: url(${write_ico}) no-repeat center center;
`;

export default DailyListPage;
