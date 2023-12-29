/*import "./App.css";
import Navbar from "./components/navbar";
import Alert from "./components/alert";
import FormInput from "./components/form_input";
import AboutUs from "./components/aboutus";
import {
  BrowserRouter as Router,Route,Routes
}from "react-router-dom";
function App() {
  return (
    <Router>
    <>
      <Navbar title="TextTrove" />
      <Alert message="Welcome Guest"/>
        <div className="container">  
      <Routes>
      <Route path="/">
      <FormInput/>
      </Route>
      <Route path="/about">
      <AboutUs/>
      </Route>
      </Routes>
        </div>
       </>
       </Router>
  );
}

export default App;*/
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Alert from './components/alert';
import FormInput from './components/form_input';
import AboutUs from './components/aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar title="TextTrove" />
      <Alert message="Welcome Guest" />
      <div className="container">
        <Routes>
          <Route path="/" element={<FormInput />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
