import styled from 'styled-components';

export const DefaultTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
@media (max-width: 767px) {
  font-size: 2.5rem;

}
@media (max-width: 414px) {
font-size: 2rem;
}
`;
export const AboutMeTitle = styled(DefaultTitle)`
  font-size: 2.25rem;
  width: 13.05em;
  color: cadetblue;
  font-weight: bold;
  /* border: 2px dashed tomato; */
@media (max-width: 767px) {
  width: 85%;

}

`;

export const WeatherLocationTitle = styled(DefaultTitle)`
  margin: 0 auto;
  padding: 0 0 .4em 0;
  font-weight: 500;
  
`;

export const LottoTitle = styled(DefaultTitle)`
  color: var(--mainLight);
  font-weight: 900;
`;
