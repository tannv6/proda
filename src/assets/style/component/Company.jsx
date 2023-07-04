import styled, { css } from "styled-components";
import ico01 from "@img/ex/exico01.png";
import { Link } from "react-router-dom";
import { Subject } from "../fontStyle/Text";

export const CompanyWrap = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
export const CompanyIco = styled.span`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  border-radius: 5px;
  border: solid 1px #dbdbdb;
  flex: 0 0 auto;
  background: url(${(props) => (props.ico ? props.ico : ico01)}) no-repeat
    center center/cover;

  @media ${(props) => props.theme.mobile} {
    width: 45px;
    height: 45px;
  }
`;

export const CompanyTextWrap = styled.div`
  width: calc(100% - 60px);
`;
export const CompanyName = styled(Link)`
  display: block;
  font-size: ${(props) => (props.small ? "15px" : props.big ? "26px" : "18px")};
  font-weight: 500;
  color: ${(props) => (props.small ? "#999" : "#252525")};

  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) =>
      props.small ? "0.923rem" : props.big ? "1.3846rem" : "1.0769rem"};
  }
`;
export const CompanyCategory = styled.p`
  font-size: 15px;
  color: #999999;
  margin-top: 8px;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.923rem;
    margin-top: 7px;
  }
`;
export const CompanySubject = styled(Subject)`
  margin-top: 10px;
`;
