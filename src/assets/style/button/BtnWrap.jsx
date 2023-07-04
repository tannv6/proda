import styled, { css } from "styled-components";
export const BtnWrap = styled.div`
  margin: ${(props) =>
    props.mgt ? props.mgt : props.m_0 ? "0" : "40px auto 0"};

  ${(props) =>
    props.flexCenter &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      * + * {
        margin-left: 10px;
      }
    `}

  @media ${(props) => props.theme.mobile} {
    margin-top: ${(props) =>
      props.momgt ? props.momgt : props.momgt2 ? "1.923rem" : "1.5384rem"};
  }
`;
