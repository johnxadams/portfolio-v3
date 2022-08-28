import styled from "styled-components";

export const DefaultInput = styled.input.attrs((props) => {
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "place type value",
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;


export const PokeSearchInput = styled.input(DefaultInput)`

`