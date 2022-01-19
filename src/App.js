import TopPage from "./page/TopPage";
import Wallet from "./page/Wallet";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [color_top, setColorTop] = useState("#0FF");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />}></Route>
        <Route path="/wallet" element={<Wallet color_top={color_top} setColorTop={setColorTop} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
