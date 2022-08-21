// hooks
// import React, {useState} from "react";

// data
// import {worksArr} from "../../../../data";
 /*  
 * - deconstruction, replacing (parameter.props), using {worksArr} instead
 * - in the map(method) - also removing props. since paramtere is deconstructured
 *  */
export default function GifContainer(props) {
  // const [image, setImage] = useState(props.worksArr.map((item) => {
  //  return item.img
  // }));
  // const handleMouseEnter = (e) => {
  // setImage(props.worksArr.map((item) => {
  //   return item.gif
  //  }));
  // console.log(image);
  // }
  return (
    <>
      <div className="gif-container">
        {props.worksArr.map((item, i) => (
          <div className="project-card" key={i}>
            <a href={`#${item.name}`}>
              <div className="gif-circle">
                <img
                  className="img-of-work"
                  src={item.gif}
                  alt={item.alt}
                  // onMouseEnter={handleMouseEnter}
                ></img>
              </div>
            </a>
            <p>{item.name}</p>
            <a className="github-link" href="link">code</a>
          </div>
        ))}
      </div>
    </>
  );
}
