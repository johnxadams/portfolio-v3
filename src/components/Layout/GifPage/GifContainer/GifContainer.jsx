// library
import React from 'react'



export default function GifContainer(props) {
  return (
      <>
        <div className='gif-container'>
            {props.worksArr.map((item, i) => (
                <div className='project-card' key={i}>
                    <div className='gif-circle'><img className='img-of-work' src={item.link}></img> </div>
                    {item.name}</div>
            ))}
        </div>
      </>
  )
}