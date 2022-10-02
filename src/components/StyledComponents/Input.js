import styled from 'styled-components';

export const DefaultInput = styled.input.attrs((props) => {
  return {
    type: props.type || 'text',
    placeholder: props.placeholder || 'place type value',
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

export const PokeSearchInput = styled(DefaultInput)`
  margin: 0.5em;
  width: auto;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-transform: capitalize;
  }
@media (max-width: 767px) {
width: 12em;
margin: .3em;
}
`;
export const WeatherInput = styled(DefaultInput)`
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  // border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  color: #f8f8f8;
  margin-top: 1rem;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #f8f8f8;
      }
    
`;
