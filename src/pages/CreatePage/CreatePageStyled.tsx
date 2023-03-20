import styled from "styled-components";

const CreatePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  &__title {
    font-size: ${(props) => props.theme.fontSize.bigSize};
  }
`;

export default CreatePageStyled;
