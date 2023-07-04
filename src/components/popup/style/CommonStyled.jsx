import styled from "styled-components";
import closeIco from "@img/btn/close_15x16.png";

export const PopupWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1111111111;
  background: rgba(0, 0, 0, 0.2);

  .input_row {
    select,
    input {
      width: 100%;
    }
  }
  @media ${(props) => props.theme.mobile} {
  }
`;

export const PopupBody = styled.div`
  width: calc(100% - 30px);
  max-width: ${(props) => (props.small ? "480px" : "620px")};
  overflow-y: auto;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 27px 30px 33px;
  background: #fff;
  border-radius: 3px;
  @media ${(props) => props.theme.mobile} {
    padding: 1.923rem 1.1538rem;
    border-radius: 0.3846rem;
  }
`;

export const PopTtl = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.1538rem;
    margin-bottom: 1.923rem;
  }
`;
export const PopSubTtl = styled.p`
  color: #757575;
  line-height: 1.75;
  text-align: center;
  margin-top: -6px;
  @media ${(props) => props.theme.mobile} {
    line-height: 1.75;
    text-align: center;
    margin-top: -6px;
  }
`;
export const PopSubTtl2 = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 30px 0 13px;
  span {
    color: #252525;
    margin-left: 5px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 0.923rem;
    margin: 1.538rem 0 0.7692rem;
  }
`;

export const PopClose = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: url(${closeIco}) no-repeat center center / cover;
  @media ${(props) => props.theme.mobile} {
    width: 1.1538rem;
    height: 1.1538rem;
    top: 1.8461rem;
    right: 1.8461rem;
  }
`;
