import SearchListPage from "@pages/search/SearchListPage";
import SearchViewPage from "@pages/search/SearchViewPage";

const SearchPageRoute = () => {
  const routes = [
    { path: "/search/search_list", element: <SearchListPage /> },
    { path: "/search/view_resume", element: <SearchViewPage /> },
  ];

  return routes;
};

export default SearchPageRoute;
