import React, { Component } from 'react';


var tic = {
      tac: {
                cursor: 'pointer',
                backgroundColor: 'red',
                width:'100px',
                height:'100px',
                fontSize: '60px',
                color:'white',
                display: 'flex',

            },
            toe1: {
                backgroundColor: 'green',
                flexWrap: 'nowrap',
                display:'flex',

            },

            root: {

              position:'relative',



            },

            slider: {
                position: 'relative',
                zIndex: '5',
                transition: 'all .6s',

            },

            prev: {
              fontSize: '40px',
              outline: '0',
              cursor: 'pointer',

            },
            next: {
              fontSize: '40px',
              outline: '0',
              cursor: 'pointer',

            },
            image1: {

              position:'absolute',
              //zIndex: '1',


            },
            image2: {
              position:'absolute',

              //zIndex: '1',
            },
            image3: {
              position:'absolute',

              //zIndex: '1',
            },
            image4: {
              position:'absolute',

              //zIndex: '1',
            }
    }


// onClick = {props.onPrevious}

//  onClick = {props.onNext}




class ReactStyle extends React.Component {
  render() {
    const imageWidth = 240 // from css style sheet
    return (
        <div>
        <div className="Name">krishna chavali presents

        <div className="NameSub">now see this</div>



        </div>


        <div><img src="http://www.krishnachavali.com/images/circlpro.png" width={imageWidth}/></div>
        </div>

    );
  }
}


    class ImageC extends React.Component {
      render() {
        return (
            <div>
            <div><ReactStyle /></div>
            <div>
            <span style={tic.root} >
                   <img  style={tic.image1}  src="https://avatars0.githubusercontent.com/u/1?v=4" alt="mojombo"/>
                   <img   style={tic.image2}  src="https://avatars1.githubusercontent.com/u/17?v=4" alt="vanpelt"/>
                   <img  style={tic.image3}  src="https://avatars0.githubusercontent.com/u/3?v=4" alt="pjhyett"/>
                   <img  style={tic.image4}  src="https://avatars0.githubusercontent.com/u/4?v=4" alt="wycats"/>
                      <div style={tic.slider}>
                      <span><button style={tic.prev}>&#8668;</button></span>

                      <span><button style={tic.next}>&#8669;</button></span>
                      </div>




                    </span>

              </div>
              </div>



        );
      }
    }































console.log("tictac game");
function Square(props) {
      return (
        <button className="square"  style={tic.tac} onClick= {props.onClick}>
          {props.value}
        </button>
      );
    }


  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
      }

      handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O';



        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,

        });
      }

      renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row" style={tic.toe1}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row" style={tic.toe1}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row" style={tic.toe1}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
class Tictoe extends React.Component {
  render() {
    return (


          <div>
            <div className="Name">krishna chavali works here</div>
            <div>
              <Game />
              </div>
              <div>
              <ImageC />
              </div>
          </div>

    );
  }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default Tictoe;