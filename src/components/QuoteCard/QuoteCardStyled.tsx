import styled from "styled-components";

const QuoteCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.mainColor};
  border-radius: 20px;
  margin-inline: 10px;
  box-shadow: 8px 5px 15px grey;
  padding: 20px;
  text-align: center;
  align-items: center;

  .card {
    &__image-container {
      display: flex;
      flex-direction: row;
    }

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
  .bottom-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .delete {
    padding: 0px;
    align-self: flex-end;
    justify-content: right;
    > svg {
      width: 35px;
      height: 35px;
    }
  }
`;

export default QuoteCardStyled;
