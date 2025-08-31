import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/Landing/LandingPage";
import Loginsignup from "./Components/LoginSignUp/Loginsignup";
import PostJob from "./Components/Postjob/PostJob";
import FindJobs from './Components/findjob/Findjob';
import Navbar from './Components/shared/Navbar';

function App() {
  return (
        <div>
        <Navbar/>
        </div>
    
  );
}

export default App
