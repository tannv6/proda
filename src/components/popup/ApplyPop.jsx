import React, { useState, useEffect } from "react";
import ApplyPopCarousel from "@components/carousel/ApplyPopCarousel";
import { Button } from "@assets/style/button/Buttons";
import { ApplyBtn } from "@assets/style/button/ApplyBtn";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import {
  PopClose,
  PopSubTtl,
  PopSubTtl2,
  PopTtl,
  PopupBody,
  PopupWrap,
} from "./style/CommonStyled";
import styled from "styled-components";
import { FlexBox } from "@assets/style/layout/Flex";

const ApplyPop = ({ setPreview, setSharePop }) => {
  const [formShow, setFormShow] = useState(true);
  const handleHidden = () => {
    setPreview(false);
  };

  return (
    <>
      {setPreview ? (
        <PopupWrap>
          <PopupBody small={setSharePop ? true : null}>
            <PopTtl>
              {setSharePop ? "공유하기" : formShow ? "지원하기" : "입사지원"}
            </PopTtl>
            {setSharePop ? (
              <Share />
            ) : formShow ? (
              <Form setFormShow={setFormShow} />
            ) : (
              <Done />
            )}
            <PopClose onClick={handleHidden}></PopClose>
          </PopupBody>
        </PopupWrap>
      ) : null}
    </>
  );
};

export function Form({ setFormShow }) {
  const handleApplyBtn = () => {
    setFormShow(false);
  };

  return (
    <>
      <form action="">
        <fieldset>
          <legend>프로채용 지원하기</legend>
          <div className="input_row">
            <select name="" id="">
              <option value="">지원분야를 선택해주세요</option>
            </select>
          </div>

          <PopSubTtl2>지원이력서</PopSubTtl2>
          <ResumeArticle>
            <h4>준비된 애견 미용사 박지애입니다. 최선을 다하겠습니다!</h4>
            <ResumeBottom>
              <FlexBox>
                <span>crazy830727@naver.com</span>
                <span>010-9787-5168</span>
              </FlexBox>
              <ModifyBtn>수정</ModifyBtn>
            </ResumeBottom>
          </ResumeArticle>

          <PopSubTtl2>
            파일첨부<span>0</span>
          </PopSubTtl2>
          <MsgSect>
            <p>추가로 항목을 첨부할 수 있습니다.</p>
          </MsgSect>

          <NotiMsg>
            <p>
              *개인정보보호를 위해 개인정보가 포함된 파일은 사전동이 없이 삭제될
              수 있습니다.
            </p>
            <p>*제출서류는 채용 마감 후 90일까지 지원기업에게 제공됩니다.</p>
            <p> 제출에 동의할 경우에만 [지원하기]버튼을 클릭해 주세요.</p>
            <p> 동의하지 않을 경우 입사지원이 불가능합니다.</p>
          </NotiMsg>
          <BtnWrap momgt="1.923rem" flexCenter>
            <ApplyBtn onClick={() => handleApplyBtn()}>지원하기</ApplyBtn>
          </BtnWrap>
        </fieldset>
      </form>
    </>
  );
}

export function Done() {
  return (
    <>
      <MsgSect alert={alert}>
        <p className="alert">입사지원이 완료되었습니다.</p>
      </MsgSect>
      <MoreRecruitmentWrap>
        <ApplyPopCarousel />
        <NotiMsg>
          <p>
            *지원 후에 이력서 내용을 수정해도, 지원한 이력서는 수정된 내용으로
            바뀌지 않습니다.
          </p>
          <p>*지원자 현황통계는 지원하신 채용공고에서 확인 가능합니다.</p>
        </NotiMsg>
      </MoreRecruitmentWrap>
    </>
  );
}

export function Share() {
  return (
    <>
      <PopSubTtl>
        이 포지션과 어울리는 사람을 알고 있다면 공유해주세요.
      </PopSubTtl>

      <ShareSect>
        <input type="text" placeholder="http://naver.com" />
        <CopyBtn lineBlack lack>
          복사
        </CopyBtn>
      </ShareSect>
    </>
  );
}
const ResumeArticle = styled.article`
  width: 100%;
  border-radius: 5px;
  padding: 0 20px;
  border: solid 1px ${(props) => props.theme.color_point};
  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    word-break: keep-all;
    padding: 30px 0 20px;
  }
  @media ${(props) => props.theme.mobile} {
    border-radius: 0.1923rem;
    padding: 0 1.1538rem;
    h4 {
      font-size: 1.0769rem;
      padding: 1.5384rem 0 1.1538rem;
    }
  }
`;
const ModifyBtn = styled.button`
  color: #454545;

  @media ${(props) => props.theme.mobile} {
    display: block;
    margin-top: 1.1538rem;
  }
`;
const ResumeBottom = styled.button`
  ${(props) => props.theme.flexBC}
  padding: 19px 0;
  border-top: solid 1px #eee;
  span {
    font-size: 14px;
    color: #757575;

    & + span {
      margin-left: 9px;
      padding-left: 10px;
      position: relative;

      &::before {
        content: "|";
        font-size: 10px;
        color: #eee;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
      }
    }
  }
  @media ${(props) => props.theme.mobile} {
    padding: 1.1538rem 0;
    display: block;
    span {
      font-size: 0.923rem;

      & + span {
        margin-left: 9px;
        padding-left: 10px;
        position: relative;

        &::before {
          content: "|";
          font-size: 10px;
          color: #eee;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
        }
      }
    }
  }
`;
const MoreRecruitmentWrap = styled.div`
  margin-top: 30px;
  @media ${(props) => props.theme.mobile} {
    margin-top: 1.5384rem;
  }
`;

const ShareSect = styled.div`
  width: 100%;
  max-width: 460px;
  display: flex;
  margin: 60px auto 41px;
  input {
    width: 100%;
  }
`;
const CopyBtn = styled(Button)`
  width: 70px;
  margin-left: -1px;
  flex: 0 0 auto;
`;

const MsgSect = styled.section`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  font-size: 14px;
  color: ${(props) => (props.alert ? "#454545" : "#757575")};
  line-height: 1.3;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.923rem;
    min-height: ${(props) => (props.alert ? "6.346rem" : "5.5rem")};
  }
`;

const NotiMsg = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #999;
  line-height: 1.5;
  @media ${(props) => props.theme.mobile} {
    margin-top: 1.1538rem;
    font-size: 0.923rem;
  }
`;

export default ApplyPop;
