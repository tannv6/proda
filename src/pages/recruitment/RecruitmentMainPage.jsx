import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import RecruimentCarousel from "@components/carousel/RecruitmentCarousel";
import RecruitmentList from "@components/list/RecruitmentList";
import { ContainerTtl, ContainerTtlBox } from "@assets/style/fontStyle/title";
import styled from "styled-components";
import { Container, Inner } from "@assets/style/layout/Container";
import { Mobile } from "@components/Responsive";

const RecruitmentMainPage = () => {
  const category = "recruitment";

  return (
    <>
      <Header />
      <RecruitmentContainer>
        <CarouselSection>
          <Inner>
            <ContainerTtlBox tac>
              <ContainerTtl>
                채용에 적극적으로 임하는
                <Mobile>
                  <br />
                </Mobile>
                회사들을 모아봤어요.
              </ContainerTtl>
            </ContainerTtlBox>
            <RecruimentCarousel />
          </Inner>
        </CarouselSection>
        <section>
          <Inner>
            <RecruitmentList category={category} />
          </Inner>
        </section>
      </RecruitmentContainer>
      <Footer />
    </>
  );
};

const RecruitmentContainer = styled(Container)`
  padding: 80px 0 150px;
  @media ${(props) => props.theme.mobile} {
    padding: 3.846rem 0 4.6153rem;
  }
`;
const CarouselSection = styled.section`
  margin-bottom: 60px;
  .slick-slide {
    padding: 0 10px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 3.0769rem;
    .slick-slider {
      width: calc(100% + 4.166vw);
      margin-left: -2.0833vw;

      .slick-list {
        overflow: visible;
        .slick-slide {
          width: 83.33vw;
          padding: 0 2.0833vw;
        }
      }
    }
  }
`;
export default RecruitmentMainPage;
