import styled from "styled-components";

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const EmailRow = styled(InputRow)`
  span {
    width: 20px;
    flex-shrink: 0;
    text-align: center;
  }
  select,
  input {
    width: calc(33.3% - 10px);

    & + input {
      margin-left: 10px;
    }
  }
`;
export const PhoneRow = styled(InputRow)`
  select,
  input {
    width: calc(33.33% - 13.5px);
  }
  span {
    color: #454545;
    width: 20px;
    text-align: center;
  }
`;
export const RadioRow = styled(InputRow)`
  margin-bottom: 20px;
  div + div {
    margin-left: 30px;
  }
`;
export const AsideBtnRow = styled(InputRow)`
  button {
    width: 140px;
    flex-shrink: 0;
    margin-left: 10px;
  }
`;

export const FullBtnRow = styled(InputRow)``;
export const InputGroup = styled.div`
  > * + * {
    margin-top: 30px;
  }
  > * {
    width: 100%;
  }
  input[type="file"] {
    display: none;
  }
  @media ${({ theme }) => theme.mobile} {
    > * + * {
      margin-top: 1.538rem;
    }
  }
`;
export const InputWrap = styled.div`
  > * + * {
    margin-top: 10px;
  }

  ${RadioRow} {
    & + ${RadioRow} {
      margin-left: 30px;
    }
  }
`;
