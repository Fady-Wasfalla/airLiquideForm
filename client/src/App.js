import React, { Component } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/footer'
import FillForm from './components/fillForm'
import FleatFeedback from './components/feedback/fleatFeedback'
import DistributionFeedback from './components/feedback/distributionFeedback'
import FinanceFeedback from './components/feedback/financeFeedback'
import SourcingFeedback from './components/feedback/sourcingFeedback'
import SalesFeedback from './components/feedback/salesFeedback'
import CiFeedback from './components/feedback/cifFeedBack'
import PrFeedback from './components/feedback/prFeedback'
import Cases from './components/screens/cases'
import Questions from './components/screens/questions'
import viewQuestion from './components/screens/viewQuestion'
import Header from './components/header'
import Home from './components/screens/home'
import AdminAddEmployee from './components/admin/editEmployee'
import AdminAddPermission from './components/admin/editPermissions'
import NotFound from './components/notFound'
import Unauthorized from './components/unauthorized'
import DistributionDisplay from './components/display/feedbackDisplay/distributionDisplay'
import ChangePass from './components/screens/changePass'

import SignIn from './components/screens/signIn'


class App extends Component {

  state = {
    screensNames:[""],
    employeeId:0
  }

  

  setScreenName = (e) =>{
    this.setState({screensNames:e})
  }

  
  render() {
  return (
    <div style={{  'overflowX':'hidden' }}>
    <Router>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
        crossOrigin='anonymous' />
      <Route render={(props) => <Header {...props} screensNames={this.state.screensNames} /> } />
      
      <Switch>
        <Route exact path='/' component={SignIn} />        
        <Route exact
        path='/home'
        render={(props) => <Home {...props} CallBack={this.setScreenName}/>}
        />
        <Route exact path='/editEmplyoyee' component={AdminAddEmployee} />
        <Route exact path='/changePass' component={ChangePass} />        
        <Route exact path='/editPermission' component={AdminAddPermission} />        
        <Route exact path='/fillForm' component={FillForm} />
        <Route exact path='/distributionFeedback/:id' component={DistributionFeedback} />
        <Route exact path='/financeFeedback/:id' component={FinanceFeedback} />
        <Route exact path='/salesFeedback/:id' component={SalesFeedback} />
        <Route exact path='/sourcingFeedback/:id' component={SourcingFeedback} />
        <Route exact path='/fleatFeedback/:id' component={FleatFeedback} />
        <Route exact path='/ciFeedback/:id' component={CiFeedback} />
        <Route exact path='/prFeedback/:id' component={PrFeedback} />
        <Route exact path='/getMyQuestions/:userName' component={Questions} />
        <Route exact path='/viewQuestion/:formId/:questionId' component={viewQuestion} />
        <Route exact path='/cases/:department'
        render={(props) => <Cases {...props} screensNames={this.state.screensNames} />}/>
        <Route exact path='/Unauthorized' component={Unauthorized} />        
        <Route exact path="*" component={NotFound} />
      </Switch>
      <Route component={Footer} />
    </Router>
    </div>
  );
}
}

export default App;
