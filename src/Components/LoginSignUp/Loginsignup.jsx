import React, { useState } from 'react';
import './Loginsignup.css';
import { useNavigate } from 'react-router-dom';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useEffect } from 'react';

function Loginsignup() {

     useEffect(() => {
       document.body.style.backgroundColor ="white";
      return () => {
        document.body.style.backgroundColor = '';
      };
    }, []);
   const navigate = useNavigate();
  const [action, setaction] = useState("Sign Up");
  const [username,setusername]=useState("");
   const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
 const Landing = () => {
 const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(action=='Login')
  {
    if(email && password)
    {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(regex.test(email) && password.length>=8)
      {
      navigate('/landing');
      }
      else 
      {
        window.alert("Incorrect email or password");
      }
    }
    else
    {
      window.alert("Incorrect email or password")
    }
  }
  else
    {
      if(username.length>=3 && password.length>=8 && regex.test(email))
      {
         navigate('/landing');
      }
      else
      {
        window.alert("Incorrect Username or email or password")
      }
    } 

  };

const setusernamehandler=(e)=>
{
  setusername(e.target.value);
}
const setemailhandler=(e)=>
{
  setemail(e.target.value);

}

const setpasswordhandler=(e)=>
{
  setpassword(e.target.value);
}




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
            <input type="text" placeholder='Name' value={username} onChange={(e)=>setusernamehandler(e)}  required/>
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' value={email} onChange={(e)=>setemailhandler(e)} required />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setpasswordhandler(e)} required/>
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
