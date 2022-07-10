import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.module.scss'

const App = () => {
  return (
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
