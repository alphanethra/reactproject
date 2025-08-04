import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/Landing/LandingPage";
import Loginsignup from "./Components/LoginSignUp/Loginsignup";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Loginsignup />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App
