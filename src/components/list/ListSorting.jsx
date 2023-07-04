import { SelectBox, Select } from "@assets/style/form/SelectBox";
import React from "react";
import TotalNum from "./TotalNum";
import styled from "styled-components";
import { FlexBox } from "@assets/style/layout/Flex";
import searchIco from "@img/ico/search_ico.png";

const ListSorting = ({ category }) => {
  const totalCount = "1,545,000";
  return (
    <>
      <ListTopRow flexBC moBlock className=" mo_block_100">
        {category == "semina" || category == "search" ? (
          <TotalNum totalCount={totalCount} />
        ) : (
          <SelectBox>
            <Select name="" id="">
              <option value="">분야별</option>
            </Select>
            <Select name="" id="">
              <option value="">경력별</option>
            </Select>
            <SortingSearchBox>
              <input type="text" placeholder="기업명, 공고 제목 등 검색" />
              <SortingSearchBtn>검색</SortingSearchBtn>
            </SortingSearchBox>
          </SelectBox>
        )}
        {category == "semina" || category == "recruitment" ? (
          <SelectBox>
            <Select name="" id="" mo_w_100>
              <option value="">최신순</option>
            </Select>
          </SelectBox>
        ) : (
          <SelectBox>
            <Select name="" id="">
              <option value="">분야별</option>
            </Select>
            <Select name="" id="">
              <option value="">경력별</option>
            </Select>
            <Select name="" id="">
              <option value="">30개씩</option>
            </Select>
          </SelectBox>
        )}
      </ListTopRow>
    </>
  );
};

export default ListSorting;

const ListTopRow = styled(FlexBox)`
  margin-bottom: 10px;
  ${SelectBox} {
    width: auto;
    display: inline-flex;
    // margin-top: 15px;
    ${Select} {
      width: 140px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 1.1538rem;
    ${SelectBox} {
      margin-top: 1.1538rem;

      &:nth-of-type(n + 2) {
        margin-top: 0.7692rem;
      }
    }
  } ;
`;
const SortingSearchBox = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  max-width: 280px;
  input {
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: none;
    margin-left: 0 !important;
    margin-top: 10px;
  }
`;
const SortingSearchBtn = styled.button`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0;
  z-index: 1;
  background: url(${searchIco}) no-repeat center center;
`;
