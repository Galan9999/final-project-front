import styled from "styled-components";

const QuoteCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.mainTextColor};
  gap: 10px;
  background-color: ${(props) => props.theme.colors.mainColor};
  border-radius: 20px;
  margin-inline: 10px;
  box-shadow: 6px 3px 12px ${(props) => props.theme.colors.terciaryColor};
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
      font-size: ${(props) => props.theme.fontSize.mediumSize};
      text-align: left;
      width: 100%;
    }
    &__tags {
      font-size: ${(props) => props.theme.fontSize.mediumSize};
    }
  }
  .bottom-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .icons-container {
    display: flex;
    justify-content: right;
  }
  .detail {
    display: flex;
    align-items: flex-end;
    > svg {
      display: flex;

      width: 35px;
      height: 35px;
    }
  }
  .delete {
    display: flex;
    align-items: flex-end;
    > svg {
      align-self: flex-end;

      width: 35px;
      height: 35px;
    }
  }
`;

export default QuoteCardStyled;
