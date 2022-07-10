// components
import { Landingpage } from "./Landingpage/Landingpage";
import GifPage from "./GifPage/GifPage";
import LottoPage from "./LottoPage/LottoPage";
import PokemonPage from "./PokemonPage/PokemonPage";

export const Layout = () => {
  return (
    <>
      {/* <section className="pokemon-page">four
        <PokemonPage />
      </section> */}
      <section className="lotto-page">
        <LottoPage />
      </section>
      <section className="gif-page">
        <GifPage />
      </section>
      <section className="landing-page">
        <Landingpage />
      </section>
      <section className="div5">five</section>
    </>
  );
};
