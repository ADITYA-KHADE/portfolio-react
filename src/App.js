import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import { HashLink } from "react-router-hash-link";
// import './App.css';
import {Routes, Route } from 'react-router-dom';
// deploy it

function App() {
  return (
    <div className="App-main">
      <Routes>
        <Route path="/portfolio/" element={<>
              <Navbar />
              <Main />
              <Project />
              <Contact />
              <Footer />
            </>}>
        </Route>
        <Route path="/" element={<>
              <Navbar />
              <Main />
              <Project />
              <Contact />
              <Footer />
            </>}>
        </Route>
      </Routes>
      {/* <Navbar/>
      <Main/>
      <Project/>
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
