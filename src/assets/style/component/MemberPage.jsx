import styled from "styled-components";
import { FlexBox } from "../layout/Flex";

export const LoginHelpRow = styled(FlexBox)`
  li {
    & + li {
      position: relative;
      margin-left: 10px;
      padding-left: 11px;
      &::before {
        content: "|";
        font-size: 10px;
        color: #ddd;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
      }
    }
    span {
      color: #ddd;
      margin: 0 5px;
    }
    a {
      display: block;
      color: #454545;

      b {
        color: #252525;
      }
    }
  }
`;
