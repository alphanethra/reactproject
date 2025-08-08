import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/Landing/LandingPage";
import Loginsignup from "./Components/LoginSignUp/Loginsignup";
import PostJob from "./Components/Postjob/PostJob";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Loginsignup />} />
        <Route path="/landing" element={<LandingPage />} />
         <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App
