// import { default as React, useEffect, useState } from "react";
// import './ForgotPassword.css';
// import {Navigate} from "react-router-dom";
// import Navbarsimple from '../components/Navbarsimple';
// function ForgotPassword(props){
//     useEffect(() => {
//         props.setProgress(50);
//         setTimeout(() => {
//             props.setProgress(100);
//         }, 500);
//     }, []);
//     const[email,setEmail]=useState('');
//     return(
//         <div>
//             <form>
//                 <h4>otp is sent to your registered email</h4>
//                 <input
//                 type="otp"
//                 placeholder="Enter otp sent to your email"
//                 ></input>
//             </form>
//         </div>
//     )
// }