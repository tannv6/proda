import React from "react";

import styled from "styled-components";

const ListCountText = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  span {
    color: ${(props) => props.theme.color_point};
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
  }
`;

export default function TotalNum({ totalCount }) {
  return (
    <ListCountText>
      전체 <span>{totalCount}</span>건
    </ListCountText>
  );
}
