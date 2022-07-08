// library
import React from "react";

//components
import GifContainer from "./components/GifContainer";


//styles
import "./App.scss";
import { worksArr } from "./data";
import { GridLayout } from "./components/GridLayout/grid";

function App() {
  return (
    <div className="App">
      {/* <GifContainer worksArr={worksArr}/> */}
      <GridLayout/>
    </div>
  );
}

export default App;
