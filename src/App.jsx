import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/Landing/LandingPage";
import Loginsignup from "./Components/LoginSignUp/Loginsignup";
import PostJob from "./Components/Postjob/PostJob";
import FindJobs from './Components/findjob/Findjob';
import JobManagement from './Components/JobManagements/jobmanagement';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Loginsignup />} />
        <Route path="/landing" element={<LandingPage />} />
         <Route path="/postjob" element={<PostJob />} />
         <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/jobmanagement" element={<JobManagement />} />
      </Routes>
    </Router>
  );
}

export default App
