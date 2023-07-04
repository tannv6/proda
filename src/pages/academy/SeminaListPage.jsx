import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Tab from "@components/tab/Tab";
import ChoiceCarousel from "@components/carousel/ChoiceCarousel";
import SeminaList from "@components/list/SeminaList";
import ListSorting from "@components/list/ListSorting";
import { ContainerTtl, ContainerTtlBox } from "@assets/style/fontStyle/title";
import { Container, Inner } from "@assets/style/layout/Container";

const SeminaListPage = () => {
  const code = "academy";
  const category = "semina";
  return (
    <>
      <Header />
      <Container>
        <Inner>
          <Tab code={code} />
        </Inner>
        <ChoiceCarousel />
        <Inner>
          <ContainerTtlBox big>
            <ContainerTtl big notoSans>
              세미나
            </ContainerTtl>
          </ContainerTtlBox>
          <ListSorting category={category} />
          <SeminaList />
        </Inner>
      </Container>
      <Footer />
    </>
  );
};

export default SeminaListPage;
