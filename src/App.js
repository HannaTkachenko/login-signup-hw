import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/";
import Login from "./components/Forms/Login/index";
import SignUp from "./components/Forms/SignUp/index";
import Home from "./pages/Home";
import { styles } from "./App.module.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
