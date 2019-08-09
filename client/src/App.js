import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    
    <Router>
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
        <Route component={Header} />
        <p>The page of evey user will be loaded here</p>
          <div className="container">
              <Switch>

              </Switch>
          </div>
          <Route component={Footer} />        
</Router>
    )   
}

export default App;
