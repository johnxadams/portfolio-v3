// library
import React from "react";
 /*  
 * - deconstruction, replacing (parameter.props), using {worksArr} instead
 * - in the map(method) - also removing props. since paramtere is deconstructured
 *  */
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
