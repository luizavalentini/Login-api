import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Global.styled";
// import 'react-toastify/dist/ReactToastify.css';
// import 'nprogress/nprogress.css';
// import { Modal } from "./components";
import { Login } from "./pages/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
};