// components
import { useContext } from 'react';
import NavBar from "./NavBar/NavBar";
import { Landingpage } from "./Landingpage/Landingpage";
import AboutMe from "./AboutMe/AboutMe";
import GifPage from "./GifPage/GifPage";
import LottoPage from "./LottoPage/LottoPage";
import PokemonPage from "./PokemonPage/PokemonPage";
import WeatherPage from "./WeatherPage/WeatherPage";
import Tools from "./Tools/Tools";
import { MyContext } from '../Context/MyContexts';

//data
import { worksArr } from "../../data";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import { Container } from "../StyledComponents/Container";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";



export const Layout = () => {
  const {hamburger} = useContext(MyContext);

  const { pathname } = useLocation();
const isHomePage = pathname === "/";
  return (
    <>
    
      <section>
        <NavBar />
      </section>
      <section className="hamburger-menu">
        <HamburgerMenu/>
      </section>
      <Container className={`${hamburger ? "hideContent" : null}`} >
      <section id={"/"} className="landing-page">
        <Landingpage />
      </section>
      <section id={"about"} className="about-me">
        <AboutMe />
      </section>
      <section id={"projects"} className="gif-page">
        <GifPage />
      </section>
      <section id={worksArr[0].name} className="weather-page">
        <WeatherPage />
      </section>
      <section id={worksArr[1].name} className="lotto-page">
        <LottoPage />
      </section>
      <section id={worksArr[2].name} className="pokemon-page">
        <PokemonPage />
      </section>
      <section id={"tools"} className="tools-page" >
        <Tools />
      </section>
     
     
      {isHomePage &&
      <section className="footer-page">
        <Footer />
      </section>
      }
      </Container>
    </>
  );
};
