import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter className="App">
      <Home />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
