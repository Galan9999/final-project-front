import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  padding: ${(props) => props.theme.padding};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;

  .header {
    &__container {
      width: 100%;
    }

    &__logo {
      width: 60px;
      height: 56px;
      padding-left: 10px;
    }

    &__navigation {
      padding-left: 10px;
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    &__to-my-list {
      width: 60px;
      height: 56px;
      padding-left: 10px;

      &::isactive {
        color: black;
      }
    }

    &__log-in {
      width: 60px;
      height: 56px;
      padding-left: 10px;
    }

    &__log-out {
      width: 60px;
      height: 56px;
      padding-left: 10px;
    }

    &__to-home {
      width: 60px;
      height: 56px;
      padding-left: 10px;
    }
  }

  .active {
    color: #484a48;
  }
`;

export default HeaderStyled;
