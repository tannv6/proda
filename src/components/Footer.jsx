import React from "react";
import { Link } from "react-router-dom";
import AsideMenu from "@components/Aside";
import styled from "styled-components";
import { Inner } from "@assets/style/layout/Container";
import ico01 from "@img/common/foot_ico_01.png";
import ico02 from "@img/common/foot_ico_02.png";
import ico03 from "@img/common/foot_ico_03.png";
import ico04 from "@img/common/foot_ico_04.png";
import ico05 from "@img/common/foot_ico_05.png";
import ico06 from "@img/common/foot_ico_06.png";
import { Mobile, Pc } from "./Responsive";

const Footer = ({ asideHide }) => {
  return (
    <>
      <AsideMenu asideHide={asideHide} />
      <FooterStyled>
        <Inner>
          <FooterTop>
            <h1>
              <Link to="/main">p 프로다</Link>
            </h1>
            <FooterLink>
              <Link to="/terms/terms">이용약관</Link>
              <Link to="/terms/privacy" className="color_b2">
                개인정보처리방침
              </Link>
              <Link to="/terms/email">이메일 무단수집거부</Link>
              <Link to="/terms/contact">고객센터</Link>
            </FooterLink>
          </FooterTop>
          <FooterInfo>
            <FooterInfoLeft>
              <Pc>
                <address>
                  <span>㈜마이주주(대표이사 : 김선희) </span>
                  <small></small>
                  <span className="address">
                    서울특별시 송파구 문정로 11-1, 준영빌딩 5층
                  </span>
                  <br />
                  <span>사업자등록번호 : 000-00-00000 </span>
                  <small></small>
                  <span>통신판매번호 : 2022-서울송파-0000</span>
                  <br />
                  <span>
                    <Link to="tel:1588-0000">
                      고객센터 : 대표번호 1588-0000
                    </Link>
                  </span>
                  <small></small>
                  <span>팩스 02-0000-0000</span>
                  <small></small>
                  <span>
                    <Link to="mailto:center@petproda.co.kr">
                      center@petproda.co.kr
                    </Link>
                  </span>
                  <small></small>
                  <span>개인정보 관리책임자 : 김세연</span>
                </address>
              </Pc>
              <Mobile>
                <address>
                  <p>㈜마이주주(대표이사 : 김선희) </p>
                  <p className="address">
                    서울특별시 송파구 문정로 11-1, 준영빌딩 5층
                  </p>
                  <p>사업자등록번호 : 000-00-00000 </p>
                  <p>통신판매번호 : 2022-서울송파-0000</p>
                  <span>
                    <Link to="tel:1588-0000">
                      고객센터 : 대표번호 1588-0000
                    </Link>
                  </span>
                  <small></small>
                  <span>팩스 02-0000-0000</span>
                  <span>
                    <Link to="mailto:center@petproda.co.kr">
                      center@petproda.co.kr
                    </Link>
                  </span>
                  <small></small>
                  <span>개인정보 관리책임자 : 김세연</span>
                </address>
              </Mobile>
              <Copyright>
                Copyright © MYJUJU CO., LTD. ALL RIGHTS RESERVED
              </Copyright>
            </FooterInfoLeft>
            <SnsList>
              <Link to="#!" className="insta"></Link>
              <Link to="#!" className="youtube"></Link>
              <Link to="#!" className="facebook"></Link>
              <Link to="#!" className="blog"></Link>
              <Link to="#!" className="apple"></Link>
              <Link to="#!" className="playstore"></Link>
            </SnsList>
          </FooterInfo>
        </Inner>
      </FooterStyled>
    </>
  );
};

const FooterStyled = styled.footer`
  background-color: #fff;
  padding-top: 0;
  padding-bottom: 68px;
  color: #757575;
  font-size: 15px;
  border-top: 1px solid #dbdbdb;
  @media ${(props) => props.theme.mobile} {
    padding-bottom: 40px;
    font-size: 0.923rem;
  }
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #eeeeee;

  h1 {
    display: block;
    margin-right: 40px;
    flex-shrink: 0;
    font-size: 20px;
    font-weight: 600;
    color: #999999;
    text-transform: uppercase;
    a {
      display: block;
      width: 100%;
    }
  }
  @media ${(props) => props.theme.mobile} {
    display: block;
    padding: 20px 0;
    h1 {
      display: block;
      margin-right: 0;
      margin-bottom: 1.333rem;
      font-size: 1.1538rem;
    }
  }
`;

const FooterLink = styled.div`
  a {
    display: inline-block;
    color: #757575;

    & + a {
      margin-left: 40px;
    }
  }
  small {
    opacity: 0.4;
    margin-left: 1em;
  }
  @media ${(props) => props.theme.mobile} {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    a {
      font-size: 0.846rem;

      & + a {
        margin-left: 1.538rem;
      }
    }
    small {
      opacity: 0.4;
      margin-left: 1em;
    }
  }
`;
const FooterInfo = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: flex;
  display: -ms-flexbox;
  justify-content: space-between;
  -webkit-box-pack: space-between;
  -ms-flex-pack: space-between;
  align-items: start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  -moz-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding: 40px 0;

  @media ${(props) => props.theme.mobile} {
    flex-wrap: wrap;
    padding: 20px 0 0;
  }
`;
const FooterInfoLeft = styled.div`
  span {
    white-space: nowrap;
  }

  .address {
    white-space: unset;
  }

  address {
    color: #999999;
    line-height: 1.75;
  }

  @media ${(props) => props.theme.mobile} {
    flex-wrap: wrap;
    padding: 20px 0 0;
  }
`;
const SnsList = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: flex;
  display: -ms-flexbox;
  justify-content: start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  a {
    display: block;
    width: 36px;
    height: 36px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    & + a {
      margin-left: 10px;
    }

    &.insta {
      background-image: url(${ico01});
    }

    &.youtube {
      background-image: url(${ico02});
    }

    &.facebook {
      background-image: url(${ico03});
    }

    &.blog {
      background-image: url(${ico04});
    }

    &.apple {
      background-image: url(${ico05});
    }
    &.playstore {
      background-image: url(${ico06});
    }
  }

  @media ${(props) => props.theme.mobile} {
    margin-top: 2.307rem;
    a {
      width: 2.77rem;
      height: 2.77rem;
    }
  }
`;
const Copyright = styled.p`
  color: #666666;
  margin-top: 40px;

  @media ${(props) => props.theme.mobile} {
    margin-top: 1.5384rem;
  }
`;

export default Footer;
