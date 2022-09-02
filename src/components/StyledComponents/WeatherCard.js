import styled from "styled-components";


export const WeatherCard = styled.div`
width: 8rem;
height: 10rem;
border-radius: 10px;
background-color: #f8f8f821;
box-shadow: 0 30px 45px rgba(0, 0, 0, 0.226);
// line-height: 1px;
p:first-child {
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1rem;
}
.weather-icon-bottom {
  height: auto;
  // background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  /* @include flex-justify-align-dir(center, center, column); */
  .wi {
    font-size: 3rem;
    margin-top: -0.2rem;
  }
}
`;
