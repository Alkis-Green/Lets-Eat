import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Hero from './Components/Hero/Hero';
import { SignUp } from './Components/Signup/SignUp';

// If Auth true
// const AuthenticatedRoute = ({ component: Home, ...props }) => {
//   const { isAuthenticated } = useAuthState()
//   return (
//     <Route {...props}
//       render={routeProps =>
//         isAuthenticated ? <Home {...routeProps} /> : <Redirect to='/' />
//       } />
//   )
// }

// If Auth false redirect to landingPage
// const UnauthenticatedRoute = ({ component: Login, ...props }) => {
//   const { isAuthenticated } = useAuthState()
//   return (
//     <Route {...props}
//       render={routeProps =>
//         !isAuthenticated ? <Login {...routeProps} /> : <Redirect to='/' />
//       } />
//   )
// }

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
          <Route exact path='/' component={ Hero } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/home" component={ Home } /> 
        </Switch>
      </Router>
  );
}

export default App;



{/* <Route exact path="/" component={ Login } />
<Route path="/home" component={ Home } />  

Will be 

<AuthenticatedRoute exact path="/" component={ Login } />
<UnauthenticatedRoute path="/home" component={ Home } /> 

*/}