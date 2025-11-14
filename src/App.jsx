import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
// import Home from "./Home";
// import About from "./About";

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<HomePage />} />
       {/*<Route path="/about" element={<About />} /> */}
        </Routes>
    
    
  );
}
export default App;
