import React, { useState, useEffect, useRef } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import RecruitmentList from "@components/list/RecruitmentList";
import TopProList from "@components/list/TopProList";
import MainSlider from "@components/carousel/MainBannerCarousel";
import videoImg from "@assets/img/main/video_img.jpg";
import styled from "styled-components";
import { MainTtl, MainTtlBot } from "@assets/style/fontStyle/title";
import { BtnBig } from "@assets/style/button/Buttons";
import { Container, Inner } from "@assets/style/layout/Container";

const MainPage = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [asideHide, setAsideHide] = useState(1);
  const ProdaRef = useRef();

  // 따라다니는 asdie 메인에서만 사라졌다가 나타나게
  const handleFollow = () => {
    const sect1Top = ProdaRef.current.offsetTop;
    const headerH = document.getElementById("header").clientHeight;
    let showPoint = sect1Top - headerH; // section1+header 높이
    setScrollY(window.pageYOffset);
    if (ScrollY > showPoint) {
      setAsideHide(false);
    } else {
      setAsideHide(true);
    }
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <>
      <Header />
      <MainContainer>
        <Main>
          <div className="video">
            <video
              src=""
              poster={videoImg}
              playsInline
              autoPlay
              muted
              loop
            ></video>
          </div>
        </Main>
        <ProdaSect ref={ProdaRef}>
          <Inner>
            <MainTtl>
              너도 프로, 나도 프로
              <br />
              우리는 프로다.
            </MainTtl>
            <MainTtlBot>반려동물 종사자들의 전문 커리어 공간</MainTtlBot>
            <MainBtn bgPoint bold lack>
              지금 프로다에서 시작하세요.
            </MainBtn>
          </Inner>
        </ProdaSect>
        <Recruitment>
          <Inner>
            <RecruitmentList />
            <MainSlider />
          </Inner>
        </Recruitment>
        <TopPro>
          <Inner>
            <TopProList />
          </Inner>
        </TopPro>
      </MainContainer>
      <Footer asideHide={asideHide} />
    </>
  );
};

const MainContainer = styled(Container)`
  padding: 0;
  margin-top: 0;
  section:nth-of-type(odd) {
    background-color: #fafafa;
  }
  @media ${(props) => props.theme.mobile} {
  }
`;
const Main = styled.div`
  position: relative;
  height: 51.0416vw;
  overflow: hidden;
  min-height: 1080px;
  .video {
    width: 100%;
    height: 100%;

    video {
      width: 113%;
      height: 100%;
      margin: auto;
      -o-object-fit: cover;
      object-fit: cover;
      z-index: 0;
    }
  }
  @media ${(props) => props.theme.mobile} {
    min-height: 640px;
  }
`;

const MainBtn = styled(BtnBig)`
  width: auto;
  padding: 0 1.75rem;
  box-shadow: 0 0.875rem 1.5rem rgba(1, 216, 223, 0.36);
  border-radius: 1.8125rem;

  @media ${(props) => props.theme.mobile} {
    padding: 0 1.3076rem;
    border-radius: 1.5384rem;
  }
`;

const ProdaSect = styled.section`
  padding: 150px 0;

  ${Inner} {
    max-width: 920px;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 3.4615rem 0 17.0769rem;
  }
`;

const Recruitment = styled.section`
  padding: 85px 0 80px;
  overflow: hidden;
  ${Inner} {
    position: relative;
    aside {
      position: absolute;
      top: 53px;

      a {
        display: block;
      }

      &.left {
        transform: translateX(-100%);
        left: -30px;
      }

      &.right {
        transform: translateX(100%);
        right: -30px;
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 3.4615rem 0 17.0769rem;
  }
`;

const TopPro = styled.section`
  margin-top: 0;
  padding: 84px 0 110px;
  @media ${(props) => props.theme.mobile} {
    padding: 4.6153rem 0;
  }
`;
export default MainPage;
