import React, { useState } from 'react';
import './Loginsignup.css';
import { useNavigate } from 'react-router-dom';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useEffect } from 'react';

function Loginsignup() {

     useEffect(() => {
       document.body.style.backgroundColor ="none";
      document.body.style.background='linear-gradient(#2A7B9B,#57C785)';
      return () => {
        document.body.style.backgroundColor = '';
      };
    }, []);
   const navigate = useNavigate();
  const [action, setaction] = useState("Sign Up");
 const Landing = () => {
 
    navigate('/landing');
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="test">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setaction("Sign Up")} onDoubleClick={Landing}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setaction("Login")} onDoubleClick={Landing}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
