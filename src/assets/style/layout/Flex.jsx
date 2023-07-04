import styled, { css } from "styled-components";

export const FlexBox = styled.div`
  ${({ theme }) => {
    const {
      flex,
      flexCC,
      flexBC,
      flexSC,
      flexEC,
      flexCS,
      flexBS,
      flexSS,
      flexES,
      flexCE,
      flexBE,
      flexSE,
      flexEE,
      mobile,
    } = theme;
    return css`
      ${(props) =>
        props.flexCC
          ? flexCC
          : props.flexES
          ? flexES
          : props.flexEE
          ? flexEE
          : props.flexSC
          ? flexSC
          : props.flexEC
          ? flexEC
          : props.flexBS
          ? flexBS
          : props.flexBE
          ? flexBE
          : props.flexCE
          ? flexCE
          : props.flexCS
          ? flexCS
          : props.flexSS
          ? flexSS
          : props.flexSE
          ? flexSE
          : props.flexBC
          ? flexBC
          : flex};
      > * {
        flex-shrink: 0;
      }

      @media ${mobile} {
        ${(props) =>
          props.moBlock &&
          css`
            display: block;
            > * {
              width: 100% !important;
              margin-right: 0 !important;
              margin-left: 0 !important;
            }
          `}
      }
    `;
  }}
`;
