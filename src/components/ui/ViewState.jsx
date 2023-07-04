import React from "react";
import styled from "styled-components";
import good from "@img/ico/ico_good.png";
import review from "@img/ico/ico_review.png";

export const StateWrap = styled.div``;
const State = styled.button`
  display: inline-block;
  font-size: 18px;
  color: #757575;
  padding-left: 27px;
  background-position: left center;
  background-repeat: no-repeat;
  & + * {
    margin-left: 30px;
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.0769rem;
    padding-left: 1.5769rem;
    background-size: 1.23rem auto;
    line-height: 1.23rem;
    & + * {
      margin-left: 1.3076rem;
    }
  }
`;

const GoodState = styled(State)`
  background-image: url(${good});
`;
const ReviewState = styled(State)`
  background-image: url(${review});
`;

export default function ViewState({ reviewVal, goodVal, onClick }) {
  return (
    <StateWrap>
      <GoodState onClick={onClick}>{goodVal}</GoodState>
      <ReviewState onClick={onClick}>{reviewVal}</ReviewState>
    </StateWrap>
  );
}
