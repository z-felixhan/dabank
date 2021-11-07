import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter className="App">
      <Home />
    </BrowserRouter>
  );
}

export default App;
