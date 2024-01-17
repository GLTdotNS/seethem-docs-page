import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar.tsx";
import { Container, Box, Typography } from "@mui/material";
import Home from "./components/Home.tsx";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
