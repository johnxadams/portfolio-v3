import styled from 'styled-components';

export const DefaultTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`;
export const AboutMeTitle = styled(DefaultTitle)`
  font-size: 2.25rem;
  width: 29rem;
  color: cadetblue;
  font-weight: bold;

`;

export const WeatherTitle = styled(DefaultTitle)`
  margin-top: -0.1rem;
  font-weight: 500;
`;

export const LottoTitle = styled(DefaultTitle)`
  color: var(--mainLight);
  font-weight: 900;
`;
