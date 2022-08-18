// data
import { mySkills } from "../../../data";

// images
import logo1 from "../../../assets/logo1.png";

export const Landingpage = () => {
  return (
    <>
      <div className="big-box-behind-lp">
        <div className="inside-big-box-lp">
          <div className="inside-big-box-lp-header">
            <div className="my-logo-container">
              {" "}
              <img src={logo1} alt="" />{" "}
            </div>
            <div className="my-network-container-header">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div></div>
          </div>

          <div className="name-and-skills-container">
            <div className="my-name">John Adams</div>
            <div className="my-skills">
              {mySkills.map((skill, id) => (
                <span key={id}>{skill}</span>
              ))}
            </div>
            <div className="my-info-box">
              Hello, I’m a software engineer based in Leipzig who loves to craft
              solid and scalable visuals on the internet. My Interest in
              web-development started back in 2017 – when I worked in a start-up
              company serveRain, todays Tillome, Inc. <br /> Fast forward today I’ve
              refined my skills through a year of MERN-Stack schooling and I’m
              looking forward to apply my experience and help your business
              grow.
            </div>
          </div>
        </div>
      </div>
      <div className="profil-img-container-lp"></div>
    </>
  );
};
