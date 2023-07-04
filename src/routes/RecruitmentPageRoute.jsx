import RecruitmentMainPage from "@pages/recruitment/RecruitmentMainPage";
import RecruitmentViewPage from "@pages/recruitment/RecruitmentViewPage";
import RecruitmentCompanyPage from "@pages/recruitment/RecruitmentCompanyPage";

const RecruitmentRoutes = () => {
  const routes = [
    { path: "/recruitment/recruitment", element: <RecruitmentMainPage /> },
    { path: "/recruitment/view", element: <RecruitmentViewPage /> },
    { path: "/recruitment/company", element: <RecruitmentCompanyPage /> },
  ];

  return routes;
};

export default RecruitmentRoutes;
