import { useState } from "react";
import { Button } from "./components/ui/button";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
