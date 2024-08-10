import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Layout from "./components/layout";
import Awareness from "./pages/Awareness";
import Disasters from "./pages/Disasters";
import MapComponent from "./pages/Map";
import About from "./pages/About";
import Home from "./pages/Home";
import InteractiveGame from "./pages/InteractiveGame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="awareness" element={<Awareness />} />
          <Route path="disasters" element={<Disasters />} />
          <Route path="map" element={<MapComponent />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="game" element={<InteractiveGame />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
