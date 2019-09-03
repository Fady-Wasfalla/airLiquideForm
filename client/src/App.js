import React, { Component } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/footer'
import Admin from './components/admin/adminHome'
import FillForm from './components/fillForm'
import FleatFeedback from './components/feedback/fleatFeedback'
import DistributionFeedback from './components/feedback/distributionFeedback'
import FinanceFeedback from './components/feedback/financeFeedback'
import SourcingFeedback from './components/feedback/sourcingFeedback'
import CiFeedback from './components/feedback/cifFeedBack'
import PrFeedback from './components/feedback/prFeedback'
import Cases from './components/screens/cases'
import Header from './components/header'
import Home from './components/screens/home'
import axios from "axios"



class App extends Component {

  state = {
    screensNames:[],
    employeeId:0
  }

  async componentDidMount(){
    await axios
    .get('http://localhost:8000/api/employees/getStarted')
    .then( (res) => { this.setState({screensNames:res.data.data})
                      sessionStorage.setItem('ID', res.data.employeeId)
                      sessionStorage.setItem('employeeName', res.data.employeeName)
                      this.setState({employeeId:res.data.employeeId})
  })
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
        <Route exact path='/financeFeedback/:id' component={FinanceFeedback} />
        <Route exact path='/sourcingFeedback/:id' component={SourcingFeedback} />
        <Route exact path='/fleatFeedback/:id' component={FleatFeedback} />
        <Route exact path='/ciFeedback/:id' component={CiFeedback} />
        <Route exact path='/prFeedback/:id' component={PrFeedback} />
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
