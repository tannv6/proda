import React from "react";
import styled from "styled-components";
const MemberTabWrap = styled.ul`
  display: flex;
  margin-bottom: 20px;

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 1.1538rem;
  }
`;
const MemberTabButton = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  line-height: 48px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #999;
  border: solid 1px #eee;
  border-bottom: solid 1px #252525;
  position: relative;

  @media ${(props) => props.theme.mobile} {
    height: 3.0769rem;
    line-height: 2.923rem;
    font-size: 1.0769rem;
  }
`;
const MemberTabItem = styled.li`
  width: 50%;
  & + li {
    margin-left: -1px;
  }

  &.on ${MemberTabButton} {
    color: #252525;
    border-color: #252525;
    border-bottom: solid 1px #fff;
    z-index: 1;
  }
`;

const MemberTab = ({ setTabOn, tabOn, tabName }) => {
  return (
    <MemberTabWrap>
      <MemberTabItem
        className={`${tabOn == 0 ? "on" : ""}`}
        onClick={() => {
          setTabOn(0);
        }}
      >
        <MemberTabButton type="button">{tabName[0]}</MemberTabButton>
      </MemberTabItem>
      <MemberTabItem
        className={`${tabOn == 1 ? "on" : ""}`}
        onClick={() => {
          setTabOn(1);
        }}
      >
        <MemberTabButton type="button">{tabName[1]}</MemberTabButton>
      </MemberTabItem>
    </MemberTabWrap>
  );
};
export default MemberTab;
