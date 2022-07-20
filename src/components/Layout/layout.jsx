// components
import { Landingpage } from "./Landingpage/Landingpage";
import GifPage from "./GifPage/GifPage";
import LottoPage from "./LottoPage/LottoPage";
import PokemonPage from "./PokemonPage/PokemonPage";

export const Layout = () => {
  return (
    <>
    <section id={"Pokemon"} className="pokemon-page">
      <PokemonPage />
    </section>
    {/* <section id={"Lotto"} className="lotto-page">
      <LottoPage />
    </section>
      <section id={"Landing-Page"} className="landing-page">
        <Landingpage />
      </section>
      <section id={"gif-page"} className="gif-page">
        <GifPage />
      </section>
      <section className="div5">five</section> */}
    </>
  );
};
