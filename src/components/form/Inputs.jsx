import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Button } from "@assets/style/button/Buttons";
import styled from "styled-components";
import { AsideBtnRow, EmailRow, PhoneRow } from "./InputBoxs";
import selectIco from "@img/ico/ico_select.png";

export default function InputEmailGroup({ id, id2, id3, name, holder }) {
  const [state, setState] = useState(0);
  const handleChange = (e) => setState(e.target.value == "direct" ? 1 : 0);
  return (
    <EmailRow>
      <Input type="email" id={id} name={name} placeholder={holder} />
      <span>@</span>
      <Select name={name} id={id2} onChange={handleChange}>
        <option value="0">선택</option>
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
        <option value="hanmail.net">hanmail.net</option>
        <option value="daum.net">daum.net</option>
        <option value="korea.com">korea.com</option>
        <option value="nate.com">nate.com</option>
        <option value="yahoo.com">yahoo.com</option>
        <option value="direct">직접입력</option>
      </Select>
      <Input
        type="text"
        id={id3}
        name={name}
        disabled={state ? "" : "disabled"}
      />
    </EmailRow>
  );
}

export function InputPhone({ id, name }) {
  return (
    <PhoneRow>
      <Select id={id} name={name}>
        <option value="">선택</option>
        <option value="010">010</option>
        <option value="011">011</option>
        <option value="012">012</option>
        <option value="013">013</option>
      </Select>
      <span>-</span>
      <Input />
      <span>-</span>
      <Input />
    </PhoneRow>
  );
}

export function RadioBox({
  id,
  name,
  children,
  onChange,
  onClick,
  checked,
  value,
}) {
  return (
    <RadioBoxStyled>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        checked={checked}
        defaultChecked
      />
      <label htmlFor={id}>{children}</label>
    </RadioBoxStyled>
  );
}
export function Checkbox({
  id,
  name,
  children,
  onChange,
  onClick,
  checked,
  value,
}) {
  return (
    <ChkBox>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        checked={checked}
      />
      <label htmlFor={id}>{children}</label>
    </ChkBox>
  );
}
export function FileInput({ ref, id, onChnage, onClick }) {
  return (
    <AsideBtnRow>
      <input type="file" ref={ref} id={id} onChange={onChnage} />
      <Label htmlFor={id}></Label>
      <Button lack lineBlack onClick={onClick}>
        첨부하기
      </Button>
    </AsideBtnRow>
  );
}

export function InputAddressGroup({ id, name, id2, name2 }) {
  const CURRENT_URL =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(CURRENT_URL);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <>
      <AsideBtnRow>
        <Input type="text" id={id} name={name} />
        <Button lineBlack lack onClick={handleClick}>
          주소찾기
        </Button>
      </AsideBtnRow>
      <Input type="text" id={id2} name={name2} />
    </>
  );
}
export const Select = styled.select`
  height: 48px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 20px;
  background: #fff url(${selectIco}) right 10px center no-repeat;
  cursor: pointer;
  @media ${({ theme }) => theme.mobile} {
    height: 3.0769rem;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 48px;
  @media ${({ theme }) => theme.mobile} {
    height: 3.0769rem;
  }
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  display: block;
  width: 100%;

  + input {
    margin-top: 15px;
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.0769rem;
  }
`;
const RadioBoxStyled = styled.div`
  input[type="radio"] {
    display: none;

    & + label {
      vertical-align: middle;
      position: relative;
      display: inline-block;
      padding-left: -webkit-calc(${({ theme }) => theme.radioWdith} + 10px);
      padding-left: -moz-calcalc(${({ theme }) => theme.radioWdith} + 10px);
      padding-left: calc(${({ theme }) => theme.radioWdith} + 10px);
      line-height: ${({ theme }) => theme.radioWdith};
      cursor: pointer;

      &::after,
      &::before {
        content: "";
        position: absolute;
        background-color: #fff;
        background-position: center;
        background-repeat: no-repeat;
        border: 1px solid ${({ theme }) => theme.input_border};
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: ${({ theme }) => theme.radioWdith};
        height: ${({ theme }) => theme.radioWdith};
        border-radius: 100%;
      }

      &::after {
        width: ${({ theme }) => theme.radioInWdith};
        height: ${({ theme }) => theme.radioInWdith};
        margin-left: calc(
          (
              ${({ theme }) => theme.radioWdith} -
                ${({ theme }) => theme.radioInWdith}
            ) / 2
        );
        border: none;
      }
    }

    &:checked + label::after {
      background-color: ${({ theme }) => theme.color_point};
    }
  }
`;
const ChkBox = styled.div`
  input[type="checkbox"] {
    display: none;

    & + label {
      position: relative;
      display: inline-block;
      padding-left: -webkit-calc(${({ theme }) => theme.chk_w2} + 10px);
      padding-left: -moz-calc(${({ theme }) => theme.chk_w2} + 10px);
      padding-left: calc(${({ theme }) => theme.chk_w2} + 10px);
      line-height: ${({ theme }) => theme.chk_w2};
      vertical-align: middle;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        background-color: #fff;
        background-position: center;
        background-repeat: no-repeat;
        border: 1px solid #dbdbdb;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: ${({ theme }) => theme.chk_w2};
        height: ${({ theme }) => theme.chk_w2};
      }
      &::before {
        content: "";
        width: 8px;
        position: absolute;
        left: 1px;
        top: calc(50% - 5px);
        height: 14px;
        border: 2px solid transparent;
        transform: rotate(45deg) translateY(-50%);
        border-top: none;
        opacity: 0;
        border-left: none;
        z-index: 10;
      }
    }

    &:checked + label::before {
      opacity: 1;
      border-color: ${({ theme }) => theme.color_point};
    }
  }
`;
