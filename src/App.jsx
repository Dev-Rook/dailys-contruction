import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import Navbar from "./Components/Main/Navbar";
import Header from "./Components/Main/Header";
import Footer from "./Components/Main/Footer";

import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"Contact"} element={<Contact />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
