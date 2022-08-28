import styled, { css } from "styled-components";

export const DefaultButton = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
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
  /* margin-left: 5rem; */
`;

export const HomeBtn = styled(DefaultButton)`
  margin-left: 2rem;
`;

//contactpage-form-submitBtn
export const SubmitBtn = styled(DefaultButton)`
  margin-right: 0;
  &:active {
    background: gray;
    transition: 0.3s ease-in-out;
  }
`;

/** LottoPageBtns
 * I used props.retryBtn to distinct between two LottoBtns
 * Reset & Retry
 * Using the Ternary Operator to apply diffrent style
 * to each Btn
 * */ 
export const LottoBtn = styled(DefaultButton)`
  margin: 2rem 1rem;
  font-weight: bold;
  &:hover {
    border: 2px solid var(--hoverLottoDiv);
    color: var(--hoverLottoDiv);
    transition: all ease-in-out 0.3s;
  }
  ${({ retryBtn }) => {
    return retryBtn
      ? css`
          background: var(--mainLight);
          border: 2px solid var(--mainDark);
          color: var(--mainDark);
          &:hover {
            background: var(--mainDark);
          }
          &:active {
            background: var(--mainLight);
          }
        `
      : css`
          width: 10rem;
          &:hover {
            background: var(--mainLight);
          }
          &:active {
            background: var(--mainDark);
          }
        `;
  }}
`;

// export const LottoRetryBtn = styled(DefaultButton)`
//   margin: 2rem 1rem;
//   background: var(--mainLight);
//   border: 2px solid var(--mainDark);
//   color: var(--mainDark);
//   font-weight: bold;
// `;