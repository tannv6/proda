import React from "react";
import styled from "styled-components";
import userIcoDefault from "@img/sub/userIco_default.jpg";
import defaultImg from "@img/sub/profile_bg.jpg";

export default function ItemImg({ img }) {
  return (
    <ItemImgBox
      style={{
        backgroundImage: `url(${img == "" ? userIcoDefault : defaultImg})`,
      }}
    ></ItemImgBox>
  );
}

export const ItemImgBox = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${(props) => (props.img ? props.img : defaultImg)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  overflow: hidden;
  flex: 0 0 auto;
  border: solid 1px #eee;
  margin-right: 20px;

  @media ${(props) => props.theme.mobile} {
    width: 3.846rem;
    height: 3.846rem;
    margin-right: 1.15384rem;
  }
`;
