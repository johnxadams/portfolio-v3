// library
import React from "react";

export default function GifContainer(props) {
  return (
    <>
      <div className="gif-container">
        {props.worksArr.map((item, i) => (
          <div className="project-card" key={i}>
            <a href={`#${item.name}`}>
              <div className="gif-circle">
                <img
                  className="img-of-work"
                  src={item.link}
                  alt={item.alt}
                ></img>
              </div>
            </a>
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
