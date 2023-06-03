import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import CheckPlantPage from "./pages/checkPlantPage";
import ResultPage from "./pages/resultPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/check-plant-page" element={<CheckPlantPage/>}/>
        <Route path="/result-page" element={<ResultPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;
