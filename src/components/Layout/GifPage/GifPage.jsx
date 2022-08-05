
// components
import GifContainer from './GifContainer/GifContainer'

// data
import { worksArr } from "../../../data";


export default function GifPage() {
  return (
      <>
        <div className='gif-page'>             
            <GifContainer worksArr={worksArr}/>
        </div>
      </>
  )
}
