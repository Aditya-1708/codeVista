import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Firstpage from './pages/Firstpage';
import Home from './pages/Home'
import Compiler from './pages/Compiler'
import Hackathon from './pages/Hackathon';
import News from './pages/News';
import Research from './pages/Research';
import PrivateRoutes from './utils/PrivateRoutes'
function App() {
  const [progress, setProgress] = useState(0);
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  function handleSignInSuccess(){
    setIsAuthenticated(true)
  }
  return (
    <Router>
      <div>
      <LoadingBar
            color="white"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
      <Routes>
        <Route
        exact
        path="/"
        element={<Firstpage setProgress={setProgress}/>}
        ></Route>
        <Route
        exact
        path="/Signin"
        element={<Signin onSignInSuccess={handleSignInSuccess} setProgress={setProgress}/>}
        ></Route>
        <Route
        exact
        path="/Signup"
        element={<Signup onSignInSuccess={handleSignInSuccess} setProgress={setProgress}/>}
        ></Route>
        <Route element={<PrivateRoutes onSignInSuccess={handleSignInSuccess} isAuthenticated={isAuthenticated}/>}>
        <Route
        exact
        path="/Home"
        element={<Home setProgress={setProgress}/>}
        ></Route>
        <Route
        exact
        path="/Compiler"
        element={<Compiler setProgress={setProgress}/>}
        ></Route>
        <Route
        exact
        path="/Hackathon"
        element={<Hackathon setProgress={setProgress}/>}
        ></Route>
        <Route
        exact
        path="/News"
        element={<News setProgress={setProgress}/>}
        ></Route>
        <Route
        exact
        path="/Research"
        element={<Research setProgress={setProgress}/>}
        ></Route>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;