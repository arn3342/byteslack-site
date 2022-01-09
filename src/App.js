import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./screens/Home";
import Team from "./screens/Team";
import TeamProfile from "./screens/TeamProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="team/:profile" element={<TeamProfile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
