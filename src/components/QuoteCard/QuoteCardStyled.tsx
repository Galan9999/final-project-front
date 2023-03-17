import styled from "styled-components";

const QuoteCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.mainColor};
  border: none;
  border-radius: 20px;
  box-shadow: 8px 5px 15px black;
  padding: 20px;
  text-align: center;
  align-items: center;

  .card {
    &__image {
      border-radius: 50%;
      object-fit: cover;
      object-position: top;
    }
    &__quote {
      font-size: ${(props) => props.theme.fontSize.bigSize};
    }
    &__author {
      font-size: ${(props) => props.theme.fontSize.bigSize};
      align-self: flex-start;
    }
    &__tags {
      font-size: ${(props) => props.theme.fontSize.mediumSize};
      align-self: flex-start;
    }
  }
`;

export default QuoteCardStyled;
