import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/footer'
import Admin from './components/admin/adminHome'
import Adel from './components/adel'
import FillForm from './components/fillForm'
import FleatFeedback from './components/feedback/fleatFeedback'
import DistributionFeedback from './components/feedback/distributionFeedback'
import SourcingFeedback from './components/feedback/sourcingFeedback'
import CifFeedback from './components/feedback/cifFeedBack'
import PrFeedback from './components/feedback/prFeedback'



function App () {
  return (

    <Router>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
        crossorigin='anonymous' />
      <Route component={Header} />

      <Switch>
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/adel' component={Adel} />
        <Route exact path='/fillForm' component={FillForm} />
        <Route exact path='/distributionFeedback' component={DistributionFeedback} />
        <Route exact path='/sourcingFeedback' component={SourcingFeedback} />
        <Route exact path='/fleatFeedback' component={FleatFeedback} />
        <Route exact path='/cifFeedback' component={CifFeedback} />
        <Route exact path='/prFeedback' component={PrFeedback} />
      </Switch>
      <Route component={Footer} />
    </Router>
  )
}

export default App
