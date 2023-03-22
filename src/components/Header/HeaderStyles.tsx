import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.terciaryColor};
  padding: 20px;
  width: 100%;
  position: fixed;

  .header {
    &__container {
      display: flex;
      justify-content: space-between;
    }

    &__navigation {
      display: flex;
      justify-content: right;
      gap: 20px;
    }

    &__logo {
      filter: brightness(10%) saturate(0%) invert(100%) sepia(99%) saturate(1%)
        hue-rotate(271deg) brightness(104%) contrast(100%);
    }

    &__icon {
      color: ${(props) => props.theme.colors.backgroundLightColor};
    }
  }
`;

export default HeaderStyled;
