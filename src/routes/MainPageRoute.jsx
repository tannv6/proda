import React from 'react';
import MainPage from "@pages/MainPage";

const MainPageRoute = () => {
    const routes = [
        { path: "/main", element: <MainPage /> },
    ]
    return routes
}

export default MainPageRoute