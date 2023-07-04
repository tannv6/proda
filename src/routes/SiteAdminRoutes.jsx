import React from "react";

// import MainPage from "@pages/MainPage"

import AboutPage from "@pages/about/Main";
import RecruitmentPage from "@pages/recruitment/RecruitmentMainPage";
import SearchListPage from "@pages/search/SearchListPage";
import AcademyListPage from "@pages/academy/AcademyListPage";

import LoginPage from "@pages/login/LoginPage";
import MemberPage from "@pages/member/MemberMainPage";

const ProdaRoutes = () => {
  const routes = [
    // { path: "/main", element: <MainPage /> },

    // 서브페이지
    { path: "about/about", element: <AboutPage /> },
    { path: "recruitment/Recruitment", element: <RecruitmentPage /> },
    { path: "search/SearchList", element: <SearchListPage /> },
    { path: "academy/AcademyList", element: <AcademyListPage /> },

    // 로그인
    { path: "login/Login", element: <LoginPage /> },
    { path: "member/Member", element: <MemberPage /> },
  ];

  return routes;
};

export default ProdaRoutes;
