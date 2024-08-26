import { default as React, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbarsimple from '../components/Navbarsimple';
import './Signin.css';
function Signin(props){
    useEffect(() => {
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
        }, 500);
    }, []);
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[redirect,setRedirect]=useState(false);
    async function handleSignin(ev){
      try{
        ev.preventDefault();
        const response=await fetch('http://localhost:4000/users/login',{
        method: 'POST',
        body: JSON.stringify({"username":email,"password":password}),
        headers:{'Content-Type':'application/json'},
        credentials:'include',
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
        console.log(error);
        alert("Sign-in failed");
      }
    }
    if(redirect){
      return <Navigate to={'/Home'}></Navigate>
    }
    return(
    <div className='SigninMain'>
      <Navbarsimple/>
      <div id="SigninContainer">
        <form id='SigninForm' onSubmit={handleSignin}>
            <h2>Welcome back!</h2>
            <input type="email" 
            placeholder="Email"
            value={email}
            style={{color:"white"}}
            onChange={ev=>setEmail(ev.target.value)} />
            <input type="password" 
            placeholder="Password" 
            value={password}
            style={{color:"white"}}
            onChange={ev=>setPassword(ev.target.value)} />
            <div id="Signin-Signup">
            <p>New to the codeVista ?</p>
            <a id='a2'href='http://localhost:3000/Signup'>Register</a>
            </div>
            <a id='a1'href='http://localhost:3000/Forgot'>forgot password?</a>
            <button>Sign In</button>
          </form>
      </div>
    </div>
    );
}
export default Signin;