// import React, { useState, useEffect } from 'react';
// import './BlinkingButton.css';
// import AI from "../icons/openai.svg";

  
// const BlinkingButton = ({ onClick }) => {
//   const [isBlinking, setIsBlinking] = useState(false);
//   const toggleBlinking = () => {
//     setIsBlinking((prevIsBlinking) => !prevIsBlinking);
//   };
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIsBlinking((prevIsBlinking) => !prevIsBlinking);
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, [isBlinking]);

//   return (
//     <button
//       className={`btn btn-primary my-2 mx-2 ${isBlinking ? 'blink' : ''}`}
//       onClick={onClick}
//       style={{
//         backgroundColor: '#800080',
//         color: 'white',
//         borderColor: '#800080',
//       }}
//     >
//       <img
//         src={AI}
//         alt="AI icon"
//       />
//       Ask AI
//     </button>
//   );
// };

// export default BlinkingButton;
