import React from "react";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import {
  PopClose,
  PopSubTtl,
  PopTtl,
  PopupBody,
  PopupWrap,
} from "./style/CommonStyled";
import { ApplyBtn } from "@assets/style/button/ApplyBtn";
const Popup = ({ setPreview, ttl, subTtl, name }) => {
  const handleHidden = () => {
    setPreview(false);
  };

  return (
    <PopupWrap>
      <PopupBody>
        <PopClose onClick={handleHidden}></PopClose>
        <PopTtl>{ttl}</PopTtl>
        {subTtl ? <PopSubTtl>{subTtl}</PopSubTtl> : ""}

        {name == "search" ? (
          <BtnWrap flexCenter>
            <ApplyBtn>지원하기</ApplyBtn>
          </BtnWrap>
        ) : (
          ""
        )}
      </PopupBody>
    </PopupWrap>
  );
};

export default Popup;
