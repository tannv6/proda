import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const CategoryWrap = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.mobile} {
    width: calc(100% + 15px);
  }
`;
const Category = styled(Link)`
  width: 100%;
  max-width: 90px;
  color: #454545;
  line-height: 38px;
  border-radius: 20px;
  text-align: center;
  flex: 0 0 auto;
  border: solid 1px ${({ theme }) => theme.input_border};
  ${(props) =>
    props.active &&
    css`
      color: #fff;
      background: ${({ theme }) => theme.color_point};
      border-color: ${({ theme }) => theme.color_point};
    `}
  & + a {
    margin-left: 10px;
  }
  @media ${(props) => props.theme.mobile} {
    max-width: 5.6538rem;
    height: 2.6923rem;
    line-height: 2.6153rem;

    & + a {
      margin-left: 0.538rem;
    }
  }
`;
const Tab = () => {
  const location = useLocation();
  const data = [
    { title: "세미나", link: "semina" },
    { title: "취업꿀팁", link: "good_tip" },
    { title: "일상", link: "daily" },
    { title: "공지사항", link: "notice" },
    { title: "취업고민", link: "comunity" },
  ];

  return (
    <>
      <CategoryWrap>
        {data.map((item, index) => (
          <Category
            key={index}
            to={`/academy/` + item.link}
            active={
              location.pathname.includes("/academy/" + item.link) && "true"
            }
          >
            {item.title}
          </Category>
        ))}
      </CategoryWrap>
    </>
  );
};

export default Tab;
