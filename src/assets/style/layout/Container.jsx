import { InputGroup } from "@components/form/InputBoxs";
import styled, { css } from "styled-components";
export const Container = styled.div`
  margin-top: 100px;
  padding: ${(props) => (props.pt_0 ? "0 0 120px" : "40px 0 120px")};

  @media ${(props) => props.theme.mobile} {
    margin-top: 50px;
    overflow-x: hidden;
    padding: 1.5384rem 0 4.6153rem;
  }
`;
export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: calc(100% - 30px);
`;

export const Section = styled.section`
  padding: ${(props) =>
    props.pt_1
      ? "80px 0 0"
      : props.pb_1
      ? "0 0 80px"
      : props.pt_2
      ? "60px 0 0"
      : props.pb_2
      ? "0 0 60px"
      : "80px 0"};

  ${(props) =>
    props.pb_big &&
    css`
      padding-bottom: 120px;
    `};
  ${(props) =>
    props.bg_gray &&
    css`
      background-color: #fafafa;
    `};

  @media ${({ theme }) => theme.mobile} {
    padding: ${(props) =>
      props.pt_1
        ? "3.846rem 0 0"
        : props.pb_1
        ? "0 0 3.0769rem"
        : props.pt_2
        ? "60px 0 0"
        : props.pb_2
        ? "0 0 60px"
        : "3.0769rem 0"};

    ${(props) =>
      props.pb_big &&
      css`
        padding-bottom: 120px;
      `};
    ${(props) =>
      props.bg_gray &&
      css`
        background-color: #fafafa;
      `};
  }
`;

export const MemberContainer = styled(Container)`
  padding: 90px 0 100px;
  ${Inner} {
    max-width: 460px;
  }

  ${InputGroup} + ${InputGroup} {
    margin-top: 60px;
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 3.846rem 0 4.6153rem;

    ${InputGroup} + ${InputGroup} {
      margin-top: 1.923rem;
    }
  }
`;
