import styled from "styled-components";

const CreatePageStyled = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  gap: 20px;

  .create {
    &__title {
      font-size: ${(props) => props.theme.fontSize.bigSize};
      padding: 20px;
      text-transform: capitalize;
      text-align: center;
      font-size: 26px;
    }
  }
`;

export default CreatePageStyled;
