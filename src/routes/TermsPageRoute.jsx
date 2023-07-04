import React from "react"

import TermsPage from "@pages/terms/Terms"
import PrivacyPage from "@pages/terms/Privacy"
import EmailPage from "@pages/terms/Email"
import ContactPage from "@pages/terms/Contact"


const TermsRoutes = () => {
    const routes = [
        { path: "/terms/Terms", element: <TermsPage /> },
        { path: "/terms/Privacy", element: <PrivacyPage /> },
        { path: "/terms/Email", element: <EmailPage /> },
        { path: "/terms/Contact", element: <ContactPage /> },
      

    ]

    return routes;
}

export default TermsRoutes;