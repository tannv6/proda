import React from "react";
import styled from "styled-components";
import searchPopBtnIcon from "@img/btn/h_search21x21.png";

export const SearchPopStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.2);
  @media ${(props) => props.theme.mobile} {
    padding-top: 50px;
  }
`;

export const SearchPopBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 63px;
  background: #fff;
  position: relative;
  transition: all 0.3s ease 0s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #252525;

  @media ${(props) => props.theme.mobile} {
    padding: 40px 0;
  }
`;

export const SearchPopInner = styled.div`
  width: calc(100% - 15px);
  max-width: 980px;
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 29px;
  }
  @media ${(props) => props.theme.mobile} {
    h3 {
      font-size: 17px;
      margin-bottom: 20px;
    }
  }
`;

export const SearchInputBox = styled.div`
  position: relative;
  input {
    width: 100%;
    background-color: #fff;
    padding: 0 30px;
    padding-right: 56px;
    border: solid 2px ${({ theme }) => theme.color_point};
    font-size: 20px;
    border-radius: 29px;
    height: 56px;

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.color_point};
    }
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 56px;
    height: 56px;
    font-size: 0;
    background: url(${searchPopBtnIcon}) no-repeat center center/21px auto;
  }
  @media ${(props) => props.theme.mobile} {
    border-radius: 1.7307rem;
    input {
      padding: 0 1.538rem;
      padding-right: 3.4616rem;
      font-size: 1.1538rem;
      height: 3.4616rem;
    }
    button {
      width: 3.4616rem;
      height: 3.4616rem;
      background-size: 1.4616rem auto;
    }
  }
`;
// mobile

export default function SearchPop({ bgChange }) {
  return (
    <SearchPopStyled>
      <SearchPopBody bgChange={bgChange}>
        <SearchPopInner>
          <h3>회사 및 포지션을 검색해보세요</h3>
          <SearchInputBox>
            <input type="text" placeholder="검색해주세요." />
            <button type="button" className="h_search_btn">
              검색
            </button>
          </SearchInputBox>
        </SearchPopInner>
      </SearchPopBody>
    </SearchPopStyled>
  );
}
