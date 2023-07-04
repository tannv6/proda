import styled, { css } from "styled-components";

export const DescWrap = styled.div`
  font-size: 18px;
  color: #757575;
  line-height: 1.5;
  margin-top: ${(props) => (props.marginTop ? "40px" : "")};

  @media ${(props) => props.theme.mobile} {
    margin-top: ${(props) => (props.marginTop ? "1.5384rem" : "")};
    font-size: 1.0769rem;
  }
`;

export const Subject = styled.p`
  display: block;
  font-size: ${(props) => (props.xl ? "22px" : props.lg ? "20px" : "18px")};
  font-weight: ${(props) => (props.bold ? "600" : "500")};
  line-height: ${(props) => (props.lh_lg ? "1.5" : "1.3333")};

  >* {
    display: block;
    width: 100%;
    ${(props) =>
      props.Ell1 &&
      css`
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      `}
    ${(props) =>
      props.Ell2 &&
      css`
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: ${(props) => (props.lh_lg ? "3em" : "2.666em")};
      `}
  }

  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) =>
      props.xl ? " 1.2307rem" : props.lg ? " 1.0769rem" : " 1.0769rem"};
    line-height: ${(props) => (props.mo_lh_lg ? "1.5" : "1.43375")};

      >*{
        ${(props) =>
          props.moEll2 &&
          css`
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          max-height: ${(props) => (props.mo_lh_lg ? "3em" : "2.8675em")};
          
          
        }
          `}
  }
`;

export const Summary = styled.div`
  display: block;
  font-size: ${(props) => (props.xl ? "22px" : props.lg ? "20px" : "18px")};
  line-height: 1.3333;
  ${(props) =>
    props.gray &&
    css`
      color: #757575;
    `}
  ${(props) =>
    props.lh_lg &&
    css`
      line-height: 1.5;
    `}

  >* {
    display: block;
    ${(props) =>
      props.Ell1 &&
      css`
        line-height: 1.2;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      `}
    ${(props) =>
      props.Ell2 &&
      css`
        line-height: ${(props) => (props.lh_lg ? "1.5" : "1.3")};
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: ${(props) => (props.lh_lg ? "3em" : "2.6em")};
      `}
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    line-height: 1.5;
  }
`;

export const TextSub = styled.p`
  color: #999;
`;

export const Text = styled.p`
  color: ${(props) => (props.light ? "#999" : "#757575")};
  ${(props) =>
    props.lh_lg &&
    css`
      line-height: 1.625;
    `}
`;
