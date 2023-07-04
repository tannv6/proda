import React from "react";

import { useRoutes, Navigate, useNavigate } from "react-router-dom";

import MainPageRoute from "@routes/MainPageRoute";
import AboutPageRoute from "@routes/AboutPageRoute";
import AcademyPageRoute from "@routes/AcademyPageRoute";
import LoginPageRoute from "@routes/LoginPageRoute";
import MemberPageRoute from "@routes/MemberPageRoute";
import RecruitmentPageRoute from "@routes/RecruitmentPageRoute";
import SearchPageRoute from "@routes/SearchPageRoute";
import TermsPageRoute from "@routes/TermsPageRoute";

function App() {
  const navigate = useNavigate();
  // 메인 주소
  const mainPageRoute = MainPageRoute();
  // 전체 주소
  const aboutPageRoute = AboutPageRoute();
  const academyPageRoute = AcademyPageRoute();
  const loginPageRoute = LoginPageRoute();
  const memberPageRoute = MemberPageRoute();
  const recruitmentPageRoute = RecruitmentPageRoute();
  const searchPageRoute = SearchPageRoute();
  const termsPageRoute = TermsPageRoute();


  const defaultRoutes = [
    { path: "/*", element: <Navigate to="/main" replace="/main" /> },
  ];

  const routes = useRoutes([
    ...mainPageRoute,
    ...aboutPageRoute,
    ...academyPageRoute,
    ...loginPageRoute,
    ...memberPageRoute,
    ...recruitmentPageRoute,
    ...searchPageRoute,
    ...termsPageRoute,
    ...defaultRoutes,
  ]);
  return routes;
}

export default App;
