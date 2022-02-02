import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home.jsx";
import { About } from "./components/Pages/About.jsx";
import { Login } from "./components/Pages/Login.jsx";
import { Contact } from "./components/Pages/Contact.jsx";
import { User } from "./components/Pages/User.jsx";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
