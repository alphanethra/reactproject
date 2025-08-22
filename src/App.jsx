import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/Landing/LandingPage";
import Loginsignup from "./Components/LoginSignUp/Loginsignup";
import PostJob from "./Components/Postjob/PostJob";
import FindJobs from './Components/findjob/Findjob';


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Loginsignup />} />
        <Route path="/landing" element={<LandingPage />} />
         <Route path="/postjob" element={<PostJob />} />
         <Route path="/findjobs" element={<FindJobs />} />

      </Routes>
    </Router>
  );
}

export default App
