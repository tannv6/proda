import styled from "styled-components";
import { BtnMedium } from "./Buttons";

export const ResumeBtn = styled(BtnMedium)`
  font-size: 1.125rem;
  width: ${(props) => (props.alone ? "180px" : "160px")};

  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    width: 50%;
  }
`;
