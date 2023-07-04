import React from "react";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ReturnBtn from "@components/buttons/ReturnBtn";
import pic from "@img/ico/pic_ico27x21.png";
import { Container, Inner } from "@assets/style/layout/Container";
import { BtnWrap } from "@assets/style/button/BtnWrap";
import { BtnBig } from "@assets/style/button/Buttons";

const DailyWritePage = () => {
  const code = "academy";
  // const pageType = "write";

  return (
    <>
      <Header />
      <Container>
        <Inner>
          <WriteTop>
            <select name="" id="">
              <option value="">게시판을 선택해주세요</option>
            </select>
          </WriteTop>
          <WriteContent>
            <TitleInputBox>
              <input type="text" placeholder="제목을 입력해주세요." />
            </TitleInputBox>
            <TextInputBox>
              <textarea
                name=""
                id=""
                placeholder="내용을 입력해주세요."
              ></textarea>
            </TextInputBox>
            <PhotoCountWrap>
              <div className="ico"></div>
              <p className="count_number">
                ( <span>0/1</span> )
              </p>
            </PhotoCountWrap>
          </WriteContent>
          <BtnWrap flexCenter>
            <DailyWriteBtn bgPoint rounded>
              등록
            </DailyWriteBtn>
          </BtnWrap>
        </Inner>
      </Container>
      <Footer />
    </>
  );
};

const WriteTop = styled.div`
  max-width: 500px;

  select {
    width: 100%;
  }
`;
const WriteContent = styled.div`
  padding: 0 40px 36px;
  margin-top: 18px;
  border: solid 1px #dbdbdb;
  @media ${({ theme }) => theme.mobile} {
    padding: 0 15px 15px;
    margin-top: 10px;
  }
`;
const TitleInputBox = styled.div`
  padding: 20px 0;
  border-bottom: solid 1px #eee;
  input {
    width: 100%;
    border: none;
    font-size: 26px;

    &::placeholder {
      color: #999;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 0;
    input {
      height: 4.23rem;
      padding: 0;
      font-size: 1.3846rem;

      &::placeholder {
      }
    }
  }
`;
const TextInputBox = styled.div`
  textarea {
    width: 100%;
    height: 480px;
    padding: 20px 0;
    border: none;
    font-size: 18px;
    resize: none;

    &::placeholder {
      color: #ddd;
    }
  @media ${({ theme }) => theme.mobile} {
    padding: 1.5384rem 0;
    font-size: 1.0769rem;
  }
`;
const PhotoCountWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fafafa;

  .ico {
    width: 27px;
    height: 21px;
    margin-bottom: 6px;
    background: url(${pic}) no-repeat center center;
  }
  p {
    font-weight: 500;
    color: #999;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 4.23rem;
    height: 4.23rem;
    .ico {
      width: 1.538rem;
      height: 1.23rem;
      margin-bottom: 4px;
      background-size: cover;
    }
    p {
      font-size: 0.923rem;
    }
  }
`;
const DailyWriteBtn = styled(BtnBig)`
  width: 247px;
  border-radius: 30px;

  @media ${({ theme }) => theme.mobile} {
    width: 17.307rem;
    height: 3.4615rem;
  }
`;
export default DailyWritePage;
