import React from "react";
import styled from "styled-components";
import userIcoDefault from "@img/sub/userIco_default.jpg";
import { Text } from "@assets/style/fontStyle/Text";

const UserInfoBox = styled.div`
  ${(props) => props.theme.flexSC};

  > * + * {
    margin-left: 10px;
  }

  @medial ${(props) => props.theme.mobile} {
  }
`;

const UserIco = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: solid 1px #eee;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @medial ${(props) => props.theme.mobile} {
    width: 1.923rem;
    height: 1.923rem;
  }
`;

export default function DailyUserInfo({ ico, id, date }) {
  return (
    <UserInfoBox>
      <UserIco
        style={{
          backgroundImage: `url(${ico == "" ? userIcoDefault : ico})`,
        }}
      ></UserIco>
      <p>{id}</p>
      <Text light>{date}</Text>
    </UserInfoBox>
  );
}
