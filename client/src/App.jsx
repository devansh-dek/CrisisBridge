import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Layout from "./components/layout";
import Awareness from "./pages/Awareness";
import MapComponent from "./pages/Map";
import About from "./pages/About";
import Home from "./pages/Home";
import InteractiveGame from "./pages/InteractiveGame";
import Signup from "./components/signup";
import { RecoilRoot } from 'recoil'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import userState from './recoil/atoms/userState';
import React, { useEffect } from 'react';
import Shelter from "./pages/Shelter";

function App() {
  const setUser = useSetRecoilState(userState);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/isAuthenticated', { withCredentials: true });
        console.log("fetchuser response is ", response);
        setUser({
          userId: response.data.response.id,
          username: response.data.response.username,
          email: response.data.response.email,
          isAuthenticated: true,
        });
      } catch (error) {
        console.error('Error fetching user details', error);
      }
    };

    fetchUserDetails();
  }, [setUser]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="awareness" element={<Awareness />} />
          <Route path="map" element={<MapComponent />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="game" element={<InteractiveGame />} />
          <Route path="signup" element={<Signup />} />
          <Route path="shelter" element={<Shelter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
