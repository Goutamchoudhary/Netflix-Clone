import "./app.scss"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/Watch/Watch";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext";

const App = () => {
  const {user} = useContext(AuthContext);
  
  return (                        // Switch is replaced by Routes
    <Router>
      <Routes>
          <Route exact path="/" 
            element = {user ? <Home/> : <Navigate replace to= "/register" />} 
          />
          <Route path="/movie" 
            element = {<Home type="movie"/>} 
          />
          <Route path="/series" 
            element = {<Home type="series"/>} 
          />
          <Route path="/watch" 
            element = {<Watch/>} 
          />
          <Route path="/register" 
            element = {!user ? <Register/> : <Navigate replace to= "/" />}
          />
          <Route path="/login" 
            element = {!user ? <Login/> : <Navigate replace to= "/" />} 
          />
          
      </Routes>
    </Router>
  )
};

export default App;