import styled from "styled-components";

const DetailStyled = styled.div`
  .detail {
    &__image {
      position: fixed;
      width: 100%;
      z-index: -99;
      opacity: 0.3;
    }

    &__body {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      padding: 20px;
    }

    &__quote {
      font-size: ${(props) => props.theme.fontSize.bigSize};
      text-align: center;
    }

    &__author-info {
      text-align: left;
    }

    &__tags {
      font-style: italic;
      text-align: right;
    }
  }
`;

export default DetailStyled;
