import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
/**
 *
 * @param {{curPage:Number, totalPage:Number, pageBtnNum:Number, url:String}} curPage * 현재 페이지
 * @param {*} totalPage * 총 페이지
 * @param {*} pageBtnNum * 보여줄 페이지 버튼 수
 * @param {*} url * 페이지버튼 클릭시 이동 링크
 * @returns 페이징 컴포넌트 출력
 */
const Pager = ({ curPage, totalPage, pageBtnNum, url }) => {
  let prvOneStepUrl, firstUrl, nextOneStepUrl, endUrl;
  let startPage, endPage;
  let pageListObj = {};
  const pageListArr = [];
  // 이전페이지 아이콘 페이지 및 링크 주소 구하기
  if (curPage > 1) {
    firstUrl = `?${url}&page=1`;
    prvOneStepUrl = `?${url}&page=${curPage - 1}`;
  } else {
    firstUrl = `?${url}&page=1`;
    prvOneStepUrl = firstUrl;
  }

  startPage = Math.floor((curPage - 1) / pageBtnNum) * pageBtnNum + 1;
  endPage = startPage + (pageBtnNum - 1);
  if (endPage >= totalPage) {
    endPage = totalPage;
  }

  if (totalPage == 0) {
    pageListObj = {
      id: curPage,
      page: curPage,
      url: `?${url}&page=${curPage}`,
    };
    pageListArr.push(pageListObj);
  } else {
    for (let i = startPage; i <= endPage; i++) {
      pageListObj = {
        id: i,
        page: i,
        url: `?${url}&page=${i}`,
      };
      pageListArr.push(pageListObj);
    }
  }

  // 다음페이지 아이콘 페이지 및 링크 주소 구하기
  if (curPage < totalPage) {
    nextOneStepUrl = `?${url}&page=${curPage + 1}`;
    endUrl = `?${url}&page=${totalPage}`;
  } else {
    nextOneStepUrl = `?${url}&page=${totalPage}`;
    endUrl = nextOneStepUrl;
  }

  return (
    <>
      <PagerWrap className="pager">
        {pageListArr.map((obj) => {
          return (
            <PagerItem key={obj.id} className={obj.page == curPage ? "on" : ""}>
              <Link to={`${obj.url}`}>{obj.page}</Link>
            </PagerItem>
          );
        })}
      </PagerWrap>
    </>
  );
};

export { Pager };

/* pager */
const PagerWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media ${({ theme }) => theme.mobile} {
    margin-top: 1.538rem;
  }
`;

const PagerItem = styled.li`
  & + li {
    margin-left: 3px;
  }
  a {
    display: block;
    text-align: center;
    line-height: 32px;
    width: 34px;
    height: 34px;
    font-size: 14px;
    color: #999;
    border: solid 1px #dbdbdb;
  }

  &.on {
    a {
      border-color: #252525;
      color: #252525;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    & + li {
      margin-left: 0.538rem;
    }
    a {
      line-height: 2.2307rem;
      width: 2.3846rem;
      height: 2.3846rem;
      font-size: 1rem;
    }
  }
`;
