import React from "react";
import { Parallax } from "react-parallax";
import Button from 'react-bootstrap/Button'; 

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
   
    <Parallax bgImage={image2} strength={-100} renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(40, 96, 144 , ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 1500,
              height: percentage * 400
            }}
          />
        </div>
      )}>
      <div style={{ height: window.innerHeight }}>
        <div style={insideStyles}>
        <h1 Style="color:#d9132f;"> Everything is easy now , it is just one click</h1>
         </div>
      </div>
    </Parallax>
  
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(40, 96, 144 , ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 600,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: window.innerHeight }}>
        <div style={insideStyles}>
            <h1 Style="color:#d9132f;">Now go to work</h1>            
        </div>
      </div>
    </Parallax>
  
  </div>
);
        }
    }

export default home;
