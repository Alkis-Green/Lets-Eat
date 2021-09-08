import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login';
import Home from './Pages/Home';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (

      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Switch>
          <Route exact path="/" component={ Home } /> 
          <Route  path="/login" component={ Login } />
        </Switch>
      </Router>

  );
}

export default App;
