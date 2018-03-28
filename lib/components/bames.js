import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {StyleRoot} from 'radium';


function clickio() {
  console.log('button clicked');
}



var img1 = './images/a.jpg';
var img2 = './images/b.jpg';
var img3 = './images/c.jpg';
var img4 = './images/d.jpg';
var img5 = './images/e.jpg';
var img6 = './images/f.jpeg';
var img7 = './images/g.jpg';
var img8 = './images/h.jpg';1
var img9 = './images/i.jpg';
var img10 = './images/j.jpg';
var img11 = './images/k.jpg';
var img12 = './images/l.jpg';
var img13 = './images/m.jpg';


var repeat = './images/repeat.jpg';
var logo = './images/logo.svg';
//var logo2x = './images/logo@2x.png 2x';
//var i2a = './images/h@2x.jpg 2x';
var i2a = './images/h@2x.jpg 2x, ./images/h@3x.jpg 3x';
var i2b = './images/i@2x.jpg 2x';
var i2c = './images/j@2x.jpg 2x';
var i2d = './images/k@2x.jpg 2x';




var styles = {
      backi1: {
        margin: '0',
        position: 'absolute',
        color: 'green',
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',
        display: 'flex',
        '@media only screen and (max-width: 1080px) and (min-width: 0px)': {
          backgroundColor: 'black',
          flexDirection: 'column',
      },

    },
      flexi1: {
        backgroundColor: 'white',
        width: '38%',
        height:'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:'10001',
                  '@media only screen and (max-width: 540px) and (min-width: 0px)': {
                        width: '100%',
                        height:'45%'
                    },

                  '@media only screen and (max-width: 600px) and (min-width: 541px)': {
                    width: '100%',
                    height:'45%'
                },
                  '@media only screen and (max-width: 719px) and (min-width: 601px)': {
                    width: '100%',
                    height:'50%'
            },
                '@media only screen and (max-width: 1024px) and (min-width: 720px)': {
                  width: '100%',
                  height:'40%'
              },
      },




      flexi2: {
        backgroundColor: 'blue',
        width: '62%',
        height:'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media only screen and (max-width: 480px) and (min-width: 220px)': {

          width: '100%',
      },



      '@media only screen and (max-width: 719px) and (min-width: 481px)': {

    },
      '@media only screen and (max-width: 1024px) and (min-width: 720px)': {
        backgroundColor: 'blue',
        width: '100%',
    },

      },
      imageflex: {

        position:"relative",
        width:'100%',
        height:'100%',


        '@media only screen and (max-width: 480px) and (min-width: 220px)': {
          position:"absolute",
          width:'100%',
          height:'auto',
          bottom: '0',

      },



      '@media screen and (max-width: 719px) and (min-width: 481px)': {
        position:"absolute",
          width:'100%',
          height:'auto',
          bottom: '0',

    },
      '@media only screen and (max-width: 1024px) and (min-width: 720px)': {
        position:"absolute",
        width:'100%',
        height:'auto',
        bottom: '0',

    },
      },

      logo: {
        position:'absolute',
        left:'1%',
        top:'40px',
        width:'150px',
        //height:'79.271px',
        height:'auto',
        zIndex: '10001',
        filter: 'brightness(150%)',
        ':hover': {
          filter: 'grayscale(150%) brightness(150%) contrast(100%) sepia(20%)',
        },

        '@media only screen and (max-width: 420px) and (min-width: 220px)': {
            width:'110px',
            height:'auto',
            top:'18px',
      },
      '@media onlyscreen and (max-width: 719px) and (min-width: 419px)': {
        width:'100px',
        height:'auto',
    },
      '@media screen and (max-width: 1024px) and (min-width: 720px)': {
        width:'100px',
        height:'auto',
        top:'18px',
  },
      '@media screen and (max-width: 1380px) and (min-width: 1280px)': {
        width:'120px',
        height:'auto',
        top:'40px',
    },

      },
      work: {
        fontSize: '32px',
        position:'absolute',
        left: '25%',
        top:'55px',
        color:'grey',
        zIndex: '10001',
        cursor: 'pointer',
        ':hover': {
          color:'red',
        },
        '@media screen and (max-width: 420px) and (min-width: 220px)': {
          fontSize: '20px',
          left:'60%',
          top:'30px',

      },
      '@media screen and (max-width: 480) and (min-width: 361px)': {

      },
      '@media screen and (max-width: 719px) and (min-width: 419px)': {

        fontSize: '18px',
        top:'54px',

    },

      '@media screen and (max-width: 1024px) and (min-width: 720px)': {
        fontSize: '22px',
        left:'60%',
        top:'25px',

    },

    '@media screen and (max-width: 1440px) and (min-width: 1280px)': {
      fontSize: '26px',
      left: '24%',
      top:'54px',
  },

      },
      about: {
        fontSize: '32px',
        position:'absolute',
        left: '30%',
        top:'55px',
        color:'grey',
        zIndex: '10001',
        cursor: 'pointer',
        ':hover': {
          color:'red',
        },
        '@media screen and (max-width: 420px) and (min-width: 220px)': {
          fontSize: '20px',
          left:'80%',
          top:'30px',
      },
      '@media screen and (max-width: 480) and (min-width: 361px)': {

      },
      '@media screen and (max-width: 719px) and (min-width: 419px)': {

        fontSize: '18px',
        left: '33%',
        top:'54px',

    },
      '@media screen and (max-width: 1024px) and (min-width: 720px)': {
        fontSize: '20px',
        left:'80%',
        top:'25px',
    },
    '@media screen and (max-width: 1380px) and (min-width: 1280px)': {
      fontSize: '26px',
      top:'54px',
  },
      },
	content: {
		color:'black',
    fontSize: '20px',
    '@media screen and (max-width: 480) and (min-width: 361px)': {

    },
	},
      dotCover: {
        position: 'absolute',
        width: '180px',
        height: '40px',
        //backgroundColor: 'black',
        zIndex: '10000001',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom:'10px',
        '@media screen and (max-width: 480) and (min-width: 361px)': {

        },
        '@media screen and (max-width: 719px) and (min-width: 419px)': {
          position: 'absolute',
          width: '180px',
          height: '40px',
          backgroundColor: 'green',
          zIndex: '10000001',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom:'10px',
      },
      },
      dot: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'grey',
        zIndex: '100001',
        marginRight: '14px',
        cursor: 'pointer',

        '@media screen and (max-width: 719px) and (min-width: 419px)': {
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'grey',
          zIndex: '100001',
          marginRight: '14px',
          cursor: 'pointer',
      },
      },
      dotSelected: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'white',
        zIndex: '1000001',
        marginRight: '14px',
        cursor: 'pointer',

        '@media screen and (max-width: 719px) and (min-width: 419px)': {
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          zIndex: '1000001',
          marginRight: '14px',
          cursor: 'pointer',
      },
      },
      statusBar: {
        position: 'absolute',
        width: '40%',
        height: '10px',
        //backgroundColor: 'rgba(109, 100, 100, 0.49)',
        zIndex: '10001',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top:'10px'
      },
      statusDot: {
        width: '100px',
        height: '5px',
        borderRadius:'20px',
        backgroundColor: 'grey',
        zIndex: '1001',
        marginRight: '14px',
        cursor: 'pointer',
        display: 'flex',
      },
      statusDotSelected: {
        position:'absolute',
        width: '2%',
        height: '5px',
        borderRadius:'20px',
        backgroundColor: 'yellow',
        zIndex: '10001',
        marginRight: '14px',
        cursor: 'pointer',
        transition: 'all 1s ease',
        paddingRight: '0px',
    // Use a placeholder animation name in `animation`
         animation: 'x 3s ease 0s infinite',
        ':hover': {
          backgroundColor: 'white',
          paddingRight: '100px',
        },
      },

};





















//....................................................................................................................................................

// var pulseKeyframes = Radium.keyframes({
//   '0%': {width: '10%'},
//   '50%': {width: '50%'},
//   '100%': {width: '100%'},
// });



class Radium1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picset: i2a,
      pic: img8,
      picContent: 'Picture1',
      cssDot1: styles.dot,
      cssDot2: styles.dot,
      cssDot3: styles.dot,
      cssDot4: styles.dot,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick1(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick1() {
    clearInterval(this.timerID);
    clearInterval(this.timerID4);
    this.setState({
      picset: i2a,
      pic: img8,
      cssDot1: styles.dotSelected,
      cssDot4: styles.dot,
      picContent: 'picture1 quote',

    });
    this.timerID1 = setInterval(
      () => this.tick2(),
      //8000
      3000
    );
  }
  tick2() {
    clearInterval(this.timerID1);
    this.setState({
      picset: i2b,
      pic: img9,
      cssDot1: styles.dot,
      cssDot2: styles.dotSelected,
      picContent: 'picture2',
    });
    this.timerID2 = setInterval(
      () => this.tick3(),
      //5000
      3000
    );
  }

  tick3() {
    clearInterval(this.timerID2);
    this.setState({
      picset: i2c,
      pic: img10,
      picContent: 'picture3',
      cssDot2: styles.dot,
      cssDot3: styles.dotSelected
    });
    this.timerID3 = setInterval(
      () => this.tick4(),
      //5000
      3000
    );
  }
  tick4() {
    clearInterval(this.timerID3);
    this.setState({
      picset: i2d,
      pic: img11,
      picContent: 'picture4',
      cssDot3: styles.dot,
      cssDot4: styles.dotSelected
    });
    this.timerID4 = setInterval(
      () => this.tick1(),
      //5000
      3000
    );
  }

  stopTimer1() {
    this.clearAllTimeInrerval();
   // alert("1")
    this.setState({
      picset: i2a,
      pic: img8,
      cssDot1: styles.dotSelected,
      cssDot3: styles.dot,
      cssDot4: styles.dot,
      cssDot2: styles.dot,
      picContent: 'picture1'
    });
  }

  stopTimer2() {
    this.clearAllTimeInrerval();
    this.keyframexam;
    //alert("2")
    this.setState({
      picset: i2b,
      pic: img9,
      cssDot1: styles.dot,
      cssDot3: styles.dot,
      cssDot4: styles.dot,
      cssDot2: styles.dotSelected,
      picContent: 'picture2'
    });
  }

  stopTimer3() {
    this.clearAllTimeInrerval();
    //alert("3")
    this.setState({
      picset: i2c,
      pic: img10,
      cssDot1: styles.dot,
      cssDot3: styles.dotSelected,
      cssDot4: styles.dot,
      cssDot2: styles.dot,
      picContent: 'picture3'
    });
  }



  stopTimer4() {
    this.clearAllTimeInrerval();
    //alert("4")
    this.setState({
      picset: i2d,
      pic: img11,
      cssDot1: styles.dot,
      cssDot3: styles.dot,
      cssDot4: styles.dotSelected,
      cssDot2: styles.dot,
      picContent: 'picture4'
    });
  }

dot2() {
 return  this.tick4();
}

keyframio() {
  var keyframeobj = this.refs.status1keyframe;
}


clearAllTimeInrerval()  {
  clearInterval(this.timerID);
  clearInterval(this.timerID1);
  clearInterval(this.timerID2);
  clearInterval(this.timerID3);
  clearInterval(this.timerID4);
}

  render() {
    return (
        <div style={styles.backi1}>
        <div style={styles.flexi1}>
        <img style={styles.logo} src={logo} />
        <div style={styles.work} key="work">work</div>
        <div style={styles.about} key="about">about</div>
        <div style={styles.content}>{this.state.picContent}</div>


        </div>
        <div style={styles.flexi2}>

              {/* <div style={styles.statusBar}>
              <span style={styles.statusDot} id="status1">




              </span>
              <span style={styles.statusDot} id="status2"  onClick={this.dot2}>

                <span id="status1keyframe" ref="status1keyframe"></span>

              </span>
              <span style={styles.statusDot} id="status3">

              </span>
              <span style={styles.statusDot} id="status4"></span>

               </div> */}


              <div style={styles.dotCover}>
              <span style={this.state.cssDot1} id="dot1" onClick={this.stopTimer1.bind(this)}></span>
              <span style={this.state.cssDot2} id="dot2"  onClick={this.stopTimer2.bind(this)}></span>
              <span style={this.state.cssDot3} id="dot3" onClick={this.stopTimer3.bind(this)}></span>
              <span style={this.state.cssDot4} id="dot4" onClick={this.stopTimer4.bind(this)}></span>
              </div>
            {/* <button  onClick={this.stopTimer.bind(this)}>Stop</button> */}

            {/* <img style={styles.imageflex} id="myImg" alt="robo" src={this.state.pic.toString()} srcSet=""/> */}
            <img style={styles.imageflex} id="myImg" alt="robo" src={this.state.pic.toString()}  srcSet={this.state.picset.toString()}/>


        </div>
         </div>
    );
  }
}




class app extends React.Component {
  render() {
    return (
         <StyleRoot>
          <div><Radium1 /></div>
          </StyleRoot>
    );
  }
}


























  Radium1 = Radium(Radium1);

  const Bames = Radium(app);
  export default Bames;