//image
import aboutmePrototype from '../../../assets/about-me-img/aboutmePrototype.jpg';

// styles-components
import { AboutMeTitle } from '../../StyledComponents/Title';

export default function AboutMe() {
  return (
    <div className="body-about-me">
      <section className="left-about-me">
        <AboutMeTitle>ABOUT ME</AboutMeTitle>
        <p>
          I'm an impassioned developer who loves to craft solid and scalable
          visuals on the internet.
        </p>
        <p>
          My Interest in web-development started back in 2017 – when I worked in
          a start-up company serveRain, todays Tillome Inc. <br /> <br />
          Fast forward today I've refined my skills by learning the foundations
          to become a full stack web developer and I'm looking forward to apply
          my experience and help your business grow.
        </p>
      </section>
      <section className="right-img-container">
        <img src={aboutmePrototype} alt="img" />
      </section>
    </div>
  );
}
