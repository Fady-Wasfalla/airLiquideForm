import React, { Component } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/footer'
import Admin from './components/admin/adminHome'
import FillForm from './components/fillForm'
import FleatFeedback from './components/feedback/fleatFeedback'
import DistributionFeedback from './components/feedback/distributionFeedback'
import SourcingFeedback from './components/feedback/sourcingFeedback'
import CifFeedback from './components/feedback/cifFeedBack'
import PrFeedback from './components/feedback/prFeedback'
import Cases from './components/screens/cases'
import Header from './components/header'
import Home from './components/screens/home'
import axios from "axios"



class App extends Component {

  state = {
    screensNames:[],
  }

  async componentDidMount(){
    await axios
    .get('http://localhost:8000/api/employees/getStarted')
    .then( (res) => {this.setState({screensNames:res.data.data})})
    .catch(err => alert(err.message))
  }

  
  render() {
  return (
    <div style={{  'overflow-x':'hidden' }}>
    <Router>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
        crossorigin='anonymous' />
      <Route render={(props) => <Header {...props} screensNames={this.state.screensNames} /> } />
      <Route
      path='/home'
      render={(props) => <Home {...props} screensNames={this.state.screensNames} />}
      />
      
      <Switch>
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/fillForm' component={FillForm} />
        <Route exact path='/distributionFeedback/:id' component={DistributionFeedback} />
        <Route exact path='/sourcingFeedback' component={SourcingFeedback} />
        <Route exact path='/fleatFeedback' component={FleatFeedback} />
        <Route exact path='/cifFeedback' component={CifFeedback} />
        <Route exact path='/prFeedback' component={PrFeedback} />
        <Route exact path='/cases/:department'
        render={(props) => <Cases {...props} screensNames={this.state.screensNames} />}/>
      </Switch>
      <Route component={Footer} />
    </Router>
    </div>
  );
}
}

export default App;
