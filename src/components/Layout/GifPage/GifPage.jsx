import React from 'react'
// components
import GifContainer from './GifContainer'

// data
import { worksArr } from "../../../data";


export default function GifPage() {
  return (
      <>
        <div className='gp-container'>two,
             GifPage
             
            <GifContainer worksArr={worksArr}/>
        </div>
        <div className="text-div">

        </div>
      </>
  )
}
