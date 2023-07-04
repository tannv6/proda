import styled from "styled-components";

export const CommonTtlBox = styled.div`
  margin: 0 ${(props) => (props.mgxAuto ? "auto" : "0")};
  text-align: ${(props) => (props.tac ? "center" : "left")};
  @media ${(props) => props.theme.mobile} {
  }
`;

export const MemberTtlBox = styled(CommonTtlBox)`
  margin-bottom: 60px;
  text-align: center;

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 2.6923rem;
  }
`;

export const MainTtl = styled.h3`
  font-size: 3.125rem;
  line-height: 1.28;
  font-weight: 900;

  @media ${(props) => props.theme.mobile} {
    font-size: 2.3076rem;
  }
`;

export const MainTtlBot = styled.p`
  font-size: 1.5rem;
  color: #757575;
  line-height: 1.5;
  margin: 30px 0 80px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.3076rem;
    margin: 1.923rem 0 2.6923rem;
  }
`;

export const ContainerTtlBox = styled(CommonTtlBox)`
  margin-bottom: ${(props) => (props.big ? "70px" : "40px")};

  @media ${(props) => props.theme.mobile} {
    margin-bottom: ${(props) => (props.big ? "3.0769rem" : "1.923rem")};
  }
`;
export const ContainerTtl = styled.h2`
  font-family: ${(props) => (props.notoSans ? "Noto Sans KR" : "NanumSquare")},
    sans-serif;
  font-size: ${(props) => (props.big ? "2.375rem" : "1.875rem")};
  line-height: 1.4782;
  text-align: inherit;
  font-weight: ${(props) => (props.notoSans ? "500" : "600")};

  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) => (props.big ? "1.8461rem" : "1.76923rem")};
  }
`;
export const SectTtlBox = styled(CommonTtlBox)`
  margin-bottom: ${(props) => (props.main ? "25px" : "30px")};
  @media ${(props) => props.theme.mobile} {
    margin-bottom: ${(props) => (props.main ? "1rem" : "1.5384rem")};
  }
`;
export const SectTtl = styled.h3`
  font-size: ${(props) => (props.big ? " 1.625rem" : " 1.5rem")};
  font-weight: ${(props) => (props.big ? "600" : " 500")};

  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) => (props.big ? "1.3846rem" : "1.3076rem")};
  }
`;

export const ViewTtl = styled.h3`
  line-height: 1.3888;
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  font-size: ${(props) => (props.big ? "  1.75rem" : " 1.625rem")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};

  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) => (props.big ? "1.4615rem" : " 1.625rem")};
    margin-bottom: ${(props) =>
      props.mobileMarginBottom ? props.mobileMarginBottom : "0"};
  }
`;
export const WriteTtl = styled.h3`
  font-size: 1.625rem;
  font-weight: 500;
  text-transform: uppercase;
  @media ${(props) => props.theme.mobile} {
  }
`;

export const MemberTtl = styled.h3`
  font-size: ${(props) => (props.big ? "2.25rem" : "2rem")};
  font-weight: 600;
  font-family: "NanumSquare", sans-serif;
  text-transform: uppercase;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.7692rem;
  }
`;
export const MemberTtlBot = styled.p`
  font-size: 1.125rem;
  line-height: 1.2;
  color: #454545;
  margin-top: 30px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.0769rem;
    margin-top: 1.538rem;
  }
`;

export const FormTtl = styled.h4`
  font-size: 1.375rem;
  font-weight: 500;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2307rem;
  }
`;
