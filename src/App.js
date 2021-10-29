import React from "react";
import { useEffect,useState } from "react";
import Signup from "./components/home/Register";
import Login from "./components/home/Login";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./Navbar/Navbar";
import Books from "./cards/Books";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer/Footer";
import Contact from "./Contact/Contact";
import Preloader from "./Pre";
import ScrollToTop from "./ScrollToTop";
import About from "./About/About";
import Register from "./components/home/Register";

function App() {

  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
       
        


        
        <ScrollToTop />
        <Switch>
       
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          
        </Switch>
        
       

      </div>
      </BrowserRouter>
  );
}


export default App;