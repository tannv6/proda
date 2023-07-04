import LoginPage from "@pages/login/LoginPage";
import FindAccountPage from "@pages/login/FindAccountPage";
import JoinPage from "@pages/login/JoinPage";

const LoginPageRoutes = () => {
  const routes = [
    { path: "/login/login", element: <LoginPage /> },
    { path: "/member/find_account", element: <FindAccountPage /> },
    { path: "/member/join", element: <JoinPage /> },
    { path: "/member/join_form", element: <JoinPage /> },
    { path: "/member/join_corporation", element: <JoinPage /> },
  ];

  return routes;
};

export default LoginPageRoutes;
