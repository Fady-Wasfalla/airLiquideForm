import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Form , Col , Row , Card, Button , Spinner } from "react-bootstrap";
import axios from 'axios'
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class cases extends Component {

    state = {
      data : {
        columns: [
          ["setosa", 10,10],
          ["versicolor", 10,10 ],
          ["virginica", 20,20],
      ],
      type : 'donut',
      onclick: function (d, i) { },
      onmouseover: function (d, i) {  },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
    }

    componentDidMount(){
    }
    


    
      render() {
          return (
            <React.Fragment>
               <C3Chart data={this.state.data} />
            </React.Fragment>
        )
      }

}


export default cases;
