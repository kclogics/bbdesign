import React from 'react';
import ReactDOM, { render } from 'react-dom';
import axios from 'axios';

import _ from 'lodash';


//bit.ly/s-pcs
var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};
/**
 * Styles of the Div Element starts
 *
 *
*/

var divStyle = {
  backi: {
    color: 'orange',
    width: '300px',
    height: '100%',
    backgroundColor: 'royalblue',
    fontSize: '30px',
    float:'left',
    position:'relative',

  },

  starInline: {

    color: 'yellow',
    display:'inline-block',
    cursor: 'pointer'


  },

  iputi: {

    display:"block",
    width: '200px',
    height:'100%',
    float: 'left',
    marginLeft:'50px',
    top:'20px',
    position:'relative'
  },

  positionGithubCard: {
    position: 'absolute',
    top: '400px',
    right: '50%',

  },

  utichar: {
    fontSize: '20px',
    position:'relative',
    right: '500px'
  },

  spanNum: {
    backgroundColor: 'white',
    borderRadius: '50%',
    fontSize: '30px',
    display: 'inline-block',
    marginLeft:'30px',
    width:'30px',
    position: 'relative',
    left: '30%',
    top: '20px',
    cursor:'pointer'
  },



  blockNum: {

    color:'red',
    position: 'absolute',
    width:'98%',
    height:'80px',
    top: '200px',
    backgroundColor: 'pink',


  },

  selected: {
        backgroundColor: 'lightgrey',
        color: 'grey',
        cursor:'not-allowed',

  },
  used: {
    backgroundColor: 'green',
    color: 'lightgreen',
    cursor:'not-allowed'
  },


 buttonDefault: {

  backgroundColor: 'blue',
  width: '40px',
  height: '30px',
  color: 'white',

 },
 buttonDanger: {

      backgroundColor: 'red',
      width: '40px',
      height: '30px',
      color: 'white',

    },

  buttonSuccess: {
    backgroundColor: 'green',
    width: '40px',
    color: 'white',
    height: '30px'
  },

};
/**
 *
 *
 *
 *
 * sttyles of the Div Element Ends
 *
 *
 *
 */
 const Card = (props) => {
   return(
          <div>
          <div>
          <div><img width="100px" src={props.avatar_url} alt={props.alt}/></div>
          <div>{props.name}</div>
          <div>{props.company}</div>
          <hr />
          </div>
          </div>
   )
 }


 const GitHub = (props) => {

    return (
      <div>
  	    {props.cards.map(card => <Card key={card.id} {...card} />)}
      </div>
    );
}


class Formio extends React.Component {


  state = { userName: ``}
  handleSubmit = (event) => {

    event.preventDefault();
 //   console.log('Event: Form Submit test: ',this.state.username);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
          .then(resp => {
             // console.log(resp)
            this.props.onSubmit(resp.data);
            this.setState({ userName: '' })

          });
  };


  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      <input type="text"
             value= {this.state.userName}
             onChange={(event) => this.setState({ userName: event.target.value})}
             placeholder="Type Github Username" required/>

      <button type="submit">OK</button>
      </form>
     );
  }
}



/*----------------------------------**play nine game starts**-------------------------------------------------------------------------- */



const Stars = (props) => {
     // const numberOfStars = 1 + Math.floor(Math.random()*9);

      // let stars = [];
      // for(let div=0; div<numberOfStars; div++) {
      //     stars.push(<div key={div}>&#9733;</div>);
      // }

  return(
    <div style={divStyle.backi}>



          {_.range(props.numberOfStars).map(div =>

          <div key={div} style={divStyle.starInline}> &#9733; </div>

          )}

    </div>
  );
}




const Button = (props) => {
  let button;
  switch(props.answerIsCorrect) {

    case true:
    button = <button style={divStyle.buttonSuccess} onClick={props.acceptAnswer} >&#10004;</button>;
    break;

    case false:
    button = <button style={divStyle.buttonDanger}>&#10008;</button>;
    break;

default:
   button = <button style={divStyle.buttonDefault}  onClick={props.checkAnswer} disabled={props.selectedNumbers.length === 0}>=</button>;
    break;


  }
  return(

    <div>

<div  style={divStyle.iputi}>


        {button}
        <br /><br />
        <div><button  onClick={props.redraw} disabled={props.redraws === 0} > &#8634; <div>{props.redraws}</div></button></div>

    </div>
    </div>

  );
}



const Answer = (props) => {
  return(
    <div style={divStyle.utichar}>

    {props.selectedNumbers.map((number, i) =>

    <span key={i}style={divStyle.spanNum}><div  onClick= {()=> props.unselectNumber(number)} > {number}</div></span>


    )}


    </div>

  );
}


const Number = (props) => {
  //const arrayOfNumbers = _.range(1,10);

  const numberClassName = (number) => {
    if(props.usedNumbers.indexOf(number) >=0 ) {
      return divStyle.used;
    }
    if(props.selectedNumbers.indexOf(number) >=0 ) {
      return divStyle.selected;
    }
  };

  return(
    <div style={divStyle.blockNum}>

    <div>
      {Number.List.map((number, i) =>

      <span key= {i} onClick={() => props.selectNumber(number)} style={divStyle.spanNum}><span style={numberClassName(number)}>{number}</span></span>

      )}

    </div>


    {/* <span  style={divStyle.spanNum}>0</span>
    <span style={divStyle.spanNum}><span style={divStyle.selected}>2</span></span>
    <span style={divStyle.spanNum}><span style={divStyle.used}>3</span></span> */}


    </div>

  );
}

Number.List = _.range(1, 10);




export class Game extends React.Component {

  render() {
    return (
     <div>
      <h3>play Game</h3>
      </div>
     )
  }
}


const DoneFrame = (props) => {
  return(
        <div>

            <h2>{props.doneStatus}</h2>
            <button onClick={props.resetGame}>Play again</button>


        </div>
  );
}

/*----------------------------------**play nine game Ends**-------------------------------------------------------------------------- */


class HelloMessage extends React.Component {

  static randomNumber = () => 1 + Math.floor(Math.random()*9);

  static initialState = () => ({

    cards:   [
      // {
      //   avatar_url: "https://avatars2.githubusercontent.com/u/18922014?v=4",
      //   name: "krishna chavali",
      //   company: "google",
      //   alt:"krishna's profile pic"
      // },
      // {
      //   avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
      //   name: "nani",
      //   company: "microos",
      //   alt:"nani's profile pic"
      // },
      // {
      //   avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
      //   name: "ezmobius",
      //   company: "google",
      //   alt:"ezmobius's profile pic"
      // },
    ],


    //selectedNumbers: [2, 4]
     selectedNumbers: [],
     randomNumberStars: HelloMessage.randomNumber(),
     usedNumbers: [],
     answerIsCorrect: null,
     redraws: 5,
     doneStatus: null,




  });

state =  HelloMessage.initialState();


resetGame = () => {
  this.setState(HelloMessage.initialState())

}


possibleSolutions = ({randomNumberStars, usedNumbers}) => {

      const possibleNumbers = _.range(1, 10).filter(number =>

      usedNumbers.indexOf(number) === -1


      )


      return possibleCombinationSum(possibleNumbers, randomNumberStars);



};

updateDoneStatus = () => {
  this.setState(prevState => {
    if (prevState.usedNumbers.length === 9) {

      return { doneStatus: 'Done. Nice!'};

    }

    if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {

            return { doneStatus: 'Game Over!'};

          }

  });
}

checkAnswer = ()  => {

    this.setState(prevState => ({

      answerIsCorrect: prevState.randomNumberStars ===
      prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)

    }));
   }




  acceptAnswer = () => {
    this.setState(prevState => ({
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        answerIsCorrect: null,
        randomNumberStars: HelloMessage.randomNumber(),
    }), this.updateDoneStatus);
  }

  redraw = () => {
    if(this.state.redraws === 0 ) {
      return;
    }
      this.setState(prevState => ({

        randomNumberStars: HelloMessage.randomNumber(),
        answerIsCorrect: null,
        selectedNumbers: [],
        redraws: prevState.redraws -1,


      }), this.updateDoneStatus);
  }

selectNumber = (clickedNumber) => {

    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0 ) { return; }


  this.setState(prevState =>  ({
    answerIsCorrect: null,

      selectedNumbers: prevState.selectedNumbers
                                .concat(clickedNumber)

  }));

}

unselectNumber = (clickedNumber) => {


  this.setState(prevState => ({

    answerIsCorrect: null,

      selectedNumbers: prevState.selectedNumbers
                                .filter(number =>  number  !== clickedNumber)
  }));
}



addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
};


render() {
  const {selectedNumbers, randomNumberStars, answerIsCorrect, usedNumbers, redraws, doneStatus, resetGame} = this.state;
  return (
    <div>

      <div>

      <Game />
      <Stars numberOfStars= {this.state.randomNumberStars}/>
      <Button  selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect} acceptAnswer={this.acceptAnswer} redraw={this.redraw} redraws={redraws}/>


      <Answer  selectedNumbers={this.state.selectedNumbers} unselectNumber={this.unselectNumber}/>




      {doneStatus ?

      <DoneFrame resetGame={this.resetGame} doneStatus= {doneStatus} /> :
      <Number selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber} usedNumbers= {usedNumbers}/>

    }

    </div>

    <div style={divStyle.positionGithubCard}>

      <Formio onSubmit={this.addNewCard} />
      <GitHub cards={this.state.cards} />

    </div>

    </div>
  );
}

}

 export default HelloMessage;