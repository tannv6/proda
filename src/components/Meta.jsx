import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

// import kakaoImg from "@img/kakao_img.png";

const Meta = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta property="og:title" content="PRODA" />
        <meta property="og:description" content="PRODA" />
        <meta property="og:url" content="" />
        {/* <meta property="og:image" content={kakaoImg} /> */}
        <meta content="PRODA" name="Title" />
        <meta content="PRODA" name="Description" />
        <meta content="PRODA" name="Keyword" />

        <title>PRODA</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
