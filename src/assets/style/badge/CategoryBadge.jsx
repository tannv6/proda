import styled from "styled-components";
export const CategoryBadge = styled.span`
  display: inline-block;
  text-align: center;
  border-radius: 0.2em;
  font-size: inherit;
  padding: 0 0.5333em;
  line-height: 1.7333em;
  color: ${(props) =>
    props.color == "red"
      ? "#ed5669"
      : props.color == "blue"
      ? "#3762ff"
      : props.color == "org"
      ? "#ff8a00"
      : props.color == "purple"
      ? "#8f65fc"
      : props.color == "green"
      ? "#2ace92"
      : "#707e8e"};
  border: 1px solid
    ${(props) =>
      props.color == "red"
        ? "#ed5669"
        : props.color == "blue"
        ? "#3762ff"
        : props.color == "org"
        ? "#ff8a00"
        : props.color == "purple"
        ? "#8f65fc"
        : props.color == "green"
        ? "#2ace92"
        : "#707e8e"};

  @media ${(props) => props.theme.mobile} {
    line-height: 1.923rem;
    font-size: 0.923rem;
    padding: 0 0.8076rem;
  }
`;
