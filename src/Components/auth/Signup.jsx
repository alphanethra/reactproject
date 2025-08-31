import React, {useState } from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link} from 'react-router-dom';




const Signup = () => {
     const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
 

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
    }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>

          {/* Full Name */}
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Nethra"
            />                
          </div>

          {/* Email */}
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" 
            value ={input.email}
            name="email"
            onChange={changeEventHandler}
            placeholder="nethra@gmail.com" />
          </div>

          {/* Phone Number */}
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="text"
            value ={input.phoneNumber}
            name="phoneNumber"
            onChange={changeEventHandler}
             placeholder="8080808080" />
          </div>

          {/* Password */}
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password"
            value ={input.password}
            name="password"
            onChange={changeEventHandler} placeholder="Enter your password" />
          </div>

          {/* Role + Profile Upload */}
          <div className="flex items-center justify-between">
            {/* Role */}
            <div className="flex items-center gap-6 my-5">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  
                  name="role"
                  value="student"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="recruiter"
                  name="role"
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </div>

            {/* Profile Upload */}
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="cursor-pointer border rounded px-2 py-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>

          {/* Redirect to Login */}
          <span className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
