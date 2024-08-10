import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Layout from "./components/layout";
import Awareness from "./pages/Awareness";
import Disasters from "./pages/Disasters";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="awareness" element={<Awareness />} />
          <Route path="disasters" element={<Disasters />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
