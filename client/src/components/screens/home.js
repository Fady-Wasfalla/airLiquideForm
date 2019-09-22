import React from "react";
import { Parallax } from "react-parallax";
import Button from 'react-bootstrap/Button'; 
import axios from 'axios'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const sp ={ 
  background: `rgba(62, 81, 102, .6)`,
}
const image2 = require('../../images/Stock.jpeg')
const image3 =require('../../images/chair.jpg')
const image4 = require('../../images/About.jpeg')

  class home extends React.Component {
    state = {
      screensNames:[],
      userName:window.localStorage.getItem("sysEmployeeName"),
    }


    async componentDidMount(){
      await axios
      .post('http://localhost:8000/api/employees/getStarted',this.state)
      .then( (res) => { if (res.data.status === 'Failed'){
                            alert(res.data.message)
                            window.location.assign('http://localhost:3000/Unauthorized')
                        }else{
                        this.props.CallBack(res.data.data)
                        window.localStorage.setItem("screens",res.data.data)
                      }
    })
      .catch(err => alert(err.message))
  
    }

    render() {
      return (
        
  <div style={styles}>
    <Parallax bgImage={image3} blur={{ min: -2, max: 6 }}>
      <div style={{ height: window.innerHeight }}>
      <div style={insideStyles}>
        <div style={sp}>
          <h1 Style="color:#d9132f;">Welcome to the new job request system</h1>
        </div>
      </div>
      </div>
    </Parallax>
   
  
  </div>
);
        }
    }

export default home;
