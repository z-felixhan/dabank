import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter className="App">
      <Sidebar />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
