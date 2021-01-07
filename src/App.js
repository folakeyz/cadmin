import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';


function App() {
  return (
    <Router>
  <Switch>
<Route path='/' exact component={Home} /> 
<Route path='/dashboard' exact component={Dashboard} /> 
     
      
     
     </Switch>
   </Router>
  );
}

export default App;
