import styled from "styled-components";

export const DefaultButton = styled.button`
  width: 12.5rem;
  height: 3rem;
  background: var(--mainDark);
  color: var(--mainLight);
  border: 2px solid var(--mainLight);
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  /* display: block; */
  margin: 1rem auto;
`;

export const ContactMeNav = styled(DefaultButton)`
  background: #2323235d;
`;

export const ContactMeFooter = styled(DefaultButton)`
  background: rgb(76, 142, 199);
color: var(--mainDark);
  border: 2px solid var(--mainDark);
`;

export const HomeBtn = styled(DefaultButton)`
margin-left: 2rem;
`