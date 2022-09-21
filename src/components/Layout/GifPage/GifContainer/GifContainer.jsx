import { AnchorBtn } from "../../../StyledComponents/Anchor";

export default function GifContainer({ worksArr }) {
  return (
    <>
      <div className="gif-container">
        {worksArr.map((item, i) => (
          <div className="project-card" key={i}>
            <a href={`#${item.name}`}>
              {/* Every img container get its own double-class, 
              - stored in the data.
              - in this case i can add background-img in the css of each className*/}
              <div className={item.projectClassName}></div>
            </a>
            <div className="project-card-description">
              <p className="project-name">{item.name}</p>
              <AnchorBtn
                className="github-link"
                href={item.gitHubLink}
                target="_blank"
                rel="noreferrer"
              >
                code
              </AnchorBtn>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
