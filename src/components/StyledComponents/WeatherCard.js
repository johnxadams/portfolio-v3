import styled from "styled-components";


export const WeatherCard = styled.div`
width: 8em;
/* height: 10rem; */
border-radius: 10px;
background-color: #f8f8f821;
box-shadow: 0 30px 45px rgba(0, 0, 0, 0.226);
padding: .5em 0;
 /* border: 2px dashed tomato; */
p:first-child {
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1em;
}
.weather-icon-bottom {
  /* height: auto; */
  // background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
 /* border: 2px dashed tomato; */
  .wi {
    font-size: 3rem;
    /* margin-top: -0.2rem; */
 /* border: 2px dashed tomato; */

  }
}
`;
