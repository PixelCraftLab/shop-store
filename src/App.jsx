import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/shop" element={<Shop />} />
      {/* <Route path="/navbar" element={<NavBar/>}/> */}
    </Routes>
    </>
  );
}

export default App;