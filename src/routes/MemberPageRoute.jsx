import MemberMainPage from "@pages/member/MemberMainPage";

const MemberPageRoute = () => {
  const routes = [{ path: "/member/member", element: <MemberMainPage /> }];

  return routes;
};

export default MemberPageRoute;
