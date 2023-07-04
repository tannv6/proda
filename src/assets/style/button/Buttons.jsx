import styled, { css } from "styled-components";

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 1.125rem;
  height: ${(props) => (props.lack ? "48px" : "50px")};
  border: 1px solid #dbdbdb;
  background-color: #fff;
  font-weight: ${(props) => (props.bold ? "600" : "500")};
  ${(props) =>
    props.rounded_2 &&
    css`
      border-radius: 21px;
    `}
  ${(props) =>
    props.rounded_3 &&
    css`
      border-radius: 25px;
    `}
  ${(props) =>
    props.bgPoint &&
    css`
      background-color: ${({ theme }) => theme.color_point};
      color: #fff;
      border-color: ${({ theme }) => theme.color_point};
    `}
  ${(props) =>
    props.bgBlue &&
    css`
      background-color: ${({ theme }) => theme.color_blue3};
      color: #fff;
      border-color: ${({ theme }) => theme.color_blue3};
    `}
  ${(props) =>
    props.bgBlack &&
    css`
      background-color: #252525;
      color: #fff;
      border-color: #252525;
    `}
    ${(props) =>
    props.lineBlack &&
    css`
      border-color: #252525;
    `};
  ${(props) =>
    props.linkLight &&
    css`
      border-color: #eee;
    `}
  @media ${(props) => props.theme.mobile} {
    height: 3.0769rem;
    font-size: 1.0769rem;

    ${(props) =>
      props.rounded_3 &&
      css`
        border-radius: 1.538rem;
      `}
  }
`;
export const BtnSmall = styled(Button)`
  font-size: 0.9375rem;
  height: 31px;

  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
    height: 2.3076rem;
  }
`;
export const BtnMedium = styled(BtnSmall)`
  height: 42px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    height: ${(props) => (props.lack ? "2.6923rem" : "3.0769rem")};
  }
`;

export const BtnBig = styled(Button)`
  font-size: ${(props) => (props.lack ? "1.125rem" : "1.25rem")};
  height: ${(props) => (props.lack ? "58px" : "60px")};
  ${(props) =>
    props.rounded &&
    css`
      border-radius: 30px;
    `}
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    height: 3.077rem;
    ${(props) =>
      props.rounded &&
      css`
        border-radius: 1.7307rem;
      `}
  }
`;
export const BtnBig2 = styled(BtnBig)`
  height: 62px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    height: 3.077rem;
  }
`;
