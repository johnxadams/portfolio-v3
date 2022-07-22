import { mySkills } from "../../../data";

export const Landingpage = () => {
  return (
    <>
      <div className="big-box-behind-lp">
        <div className="inside-big-box-lp">
          <div className="inside-big-box-lp-header">
            <div className="my-logo-container">Logo</div>
            <div className="my-location-email">Mail Location</div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores possimus fugit, iste obcaecati enim eaque velit sit
              doloribus quos maiores praesentium quibusdam ducimus earum eos
              blanditiis, nobis amet vero tempore! Cupiditate dolore quos
              consequatur doloremque accusantium aliquam nulla totam tempora
              nobis similique a, illo ex dicta. Vel velit deleniti quo!
            </div>
          </div>
        </div>
      </div>
      <div className="gif-container-lp"></div>
    </>
  );
};
