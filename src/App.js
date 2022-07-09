// library
import React from "react";

//components
import GifContainer from "./components/GifContainer";


//styles
import "./App.scss";
import { worksArr } from "./data";
import { Layout } from "./components/Layout/layout";

function App() {
  return (
    <div className="App">
      {/* <GifContainer worksArr={worksArr}/> */}
      <Layout/>
    </div>
  );
}

export default App;

/**
 * Lndingpage
 * Gifpage
 */