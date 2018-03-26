import React from 'react';
import ReactDOM from 'react-dom';
const chalk = require('chalk');

// import divStyle from './divStyle';




class Educ extends React.Component {
  render() {
    return (
      <div style={divStyle.backi}>
        <p>Hello</p>
        <p style={divStyle.para}>krish again</p>
        <div onClick={clickio} style={divStyle.box}></div>
        <div style={divStyle.box1}></div>
      </div>


    );
  }
}



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
class Final extends React.Component {
    render() {
      return (
        <div>
            <element />
            <Educ />


        </div>

      );
    }
  }


export default Educ;