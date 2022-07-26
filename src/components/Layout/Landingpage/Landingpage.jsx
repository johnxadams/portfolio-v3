import { mySkills } from "../../../data";

export const Landingpage = () => {
  return (
    <>
      <div className="big-box-behind-lp">
        <div className="inside-big-box-lp">
          <div className="inside-big-box-lp-header">
            <div className="my-logo-container">Logo</div>
            <div className="my-github-linkedin">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
            <div></div>
          </div>


          <div className="name-and-skills-container">
            <div className="my-name">John Adams</div>
            <div className="my-skills">
              <ul>
                {mySkills.map((skill, id) => (
                  <li key={id}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="my-info-box">
              Hello, I’m a software engineer in Leipzig. I love to craft solid
              and scalable visuals on the internet. My Interest in
              web-development started back in 2017 – when I worked in a start-up
              company serveRain, today Tillome. <br/> Fast forward today I’ve refined
              my skills through a year of MERN-Stack schooling and I’m looking
              forward to apply my experience and help your business grow.
            </div>
          </div>
        </div>
      </div>
      <div className="gif-container-lp"></div>
    </>
  );
};
