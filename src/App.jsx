import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home.jsx";
import { About } from "./components/Pages/About.jsx";
import { Login } from "./components/Pages/Login.jsx";
import { Contact } from "./components/Pages/Contact.jsx";
import { Marketplace } from "./components/Pages/Marketplace.jsx";
import { Profile } from "./components/Pages/Profile.jsx";
import React from "react";
import { Signup } from "./components/Pages/Signup.jsx";
function App() {
  return (
      <Router>
        <NavBar />
        <div className="pages">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    
  );
}
export default App;
