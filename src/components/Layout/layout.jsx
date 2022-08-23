// components
import NavBar from "./NavBar/NavBar";
import { Landingpage } from "./Landingpage/Landingpage";
import AboutMe from "./AboutMe/AboutMe";
import GifPage from "./GifPage/GifPage";
import LottoPage from "./LottoPage/LottoPage";
import PokemonPage from "./PokemonPage/PokemonPage";
import WeatherPage from "./WeatherPage/WeatherPage";
import Tools from "./Tools/Tools";

//data
import { worksArr } from "../../data";
import Footer from "./Footer/Footer";
import Contactpage from "./ContactPage/ContactPage";

export const Layout = () => {
  return (
    <>
    <section>
        <Contactpage />
      </section>
      {/* <section>
        <NavBar />
      </section>
      <section id={"/"} className="landing-page">
        <Landingpage />
      </section>
      <section id={"about"} className="about-me">
        <AboutMe />
      </section>
      <section id={"projects"} className="gif-page">
        <GifPage />
      </section>
      <section id={worksArr[5].name} className="weather-page">
        <WeatherPage />
      </section>

      <section id={worksArr[1].name} className="pokemon-page">
        <PokemonPage />
      </section>
      <section id={worksArr[0].name} className="lotto-page">
        <LottoPage />
      </section>
      <section id={"tools"} className="tools-page" >
        <Tools />
      </section>
      <section className="footer-page" >
        <Footer/>
      </section> */}
    </>
  );
};
