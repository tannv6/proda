import SeminaListPage from "@pages/academy/SeminaListPage";
import SeminaViewPage from "@pages/academy/SeminaViewPage";
import DailyListPage from "@pages/academy/DailyListPage";
import DailyWritePage from "@pages/academy/DailyWritePage";
import DailyViewPage from "@pages/academy/DailyViewPage";

const AcademyPageRoutes = () => {
  const routes = [
    { path: "/academy/semina", element: <SeminaListPage /> },
    { path: "/academy/semina_view", element: <SeminaViewPage /> },
    { path: "/academy/daily", element: <DailyListPage /> },
    { path: "/academy/daily_write", element: <DailyWritePage /> },
    { path: "/academy/daily_view", element: <DailyViewPage /> },
  ];

  return routes;
};

export default AcademyPageRoutes;
