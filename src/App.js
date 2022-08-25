// library
import React from "react";
import { Routes, Route } from "react-router-dom";

//components
// import GifContainer from "./components/Layout/GifPage/GifContainer/GifContainer";

//styles
import "./App.scss";
import Contactpage from "./components/Layout/ContactPage/ContactPage";
import { Layout } from "./components/Layout/layout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </div>
  );
}

export default App;

/**
 * Lndingpage
 * Gifpage
 */
