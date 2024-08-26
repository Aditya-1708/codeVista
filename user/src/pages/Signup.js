import { default as React, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbarsimple from "../components/Navbarsimple";
import './Signup.css';
function Signup(props){

  const[email,setEmail]=useState('');
  // const[otp,setOtp]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const[redirect,setRedirect]=useState(false);

    useEffect(() => {
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
        }, 500);
    }, []);
    
    async function handleSignup(ev){
      if(password!==confirmpassword){
        alert('passwords dont match');
      }
      else{
        ev.preventDefault();
        try{
          const response=await fetch('http://localhost:4000/users/signup',{
          method: 'POST',
          body: JSON.stringify({"username":email,"password":password}),
          headers:{'Content-Type':'application/json'},
          credentials:'include'
        });
        if(response.ok){
          setRedirect(true);
          props.onSignInSuccess();
        }
        else{
          const responseBody=await response.json();
          alert(responseBody.message);
        }
      }catch(error){
        alert("registration failed")
      }
      }
    }
    if(redirect){
      return <Navigate to={'/Home'}></Navigate>
    } 
    return(
    <>
    <div className='SignupMain'>
    <Navbarsimple/>
      <div className="SignupContainer">
        <form id='SingupForm' onSubmit={Signup}>
            <h2>Welcome to codeVista</h2>
            <p>begin your coding journey here</p>
            <p id="prompt">enter your email</p>
            <input type="email" 
            placeholder="Email"
            value={email}
            style={{color:"white"}}
            onChange={ev=>setEmail(ev.target.value)} />
            {/* <input type='password' 
            placeholder="OTP"
            value={otp}
            onChange={ev=>setOtp(ev.target.value)} /> */}
            <input type="password" 
            placeholder="Password"
            value={password}
            style={{color:"white"}}
            onChange={ev=>setPassword(ev.target.value)} />
            <input type="password" placeholder="Confirm Password" 
            value={confirmpassword}
            style={{color:"white"}}
            onChange={ev=>setConfirmpassword(ev.target.value)} />
            <div className="SignUp-Signin">
            <p>Already have an account?</p>
            <a href='http://localhost:3000/Signin'>Sign-in</a>
            </div>
            <button
            onClick={handleSignup}
            >Sign Up</button>
          </form>
      </div>
    </div>
    </>
    );
}
export default Signup;