import styled from "styled-components";

export const ApplyBtn = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background: #01d8df;
  box-shadow: 10px 6px 18px rgba(1, 216, 223, 0.39);

  @media ${(props) => props.theme.mobile} {
    max-width: 17.3076rem;
    border-radius: 0;
    box-shadow: 5px 3px 9px rgba(1, 216, 223, 0.39)};
    font-size: 1.0769rem;
    height: 45px;
  }
`;
