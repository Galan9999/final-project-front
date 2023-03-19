import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: ${(props) => props.theme.mainFont};
  font-size: ${(props) => props.theme.fontSize.bigSize};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.mainTextColor};
  background-color: ${(props) => props.theme.colors.mainColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${(props) => props.theme.padding};
  width: 60%;
  align-self: center;
`;
export default ButtonStyled;
