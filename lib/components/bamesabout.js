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
var img8 = './images/h.jpg';
var img9 = './images/i.jpg';
var img10 = './images/j.jpg';
var img11 = './images/k.jpg';
var img12 = './images/l.jpg';
var img13 = './images/m.jpg';


var repeat = './images/repeat.jpg';
var logo = './images/logo.svg';
//var logo2x = './images/logo@2x.png 2x';




var styles = {
      backi1: {
        margin: '0',
        position: 'absolute',
        color: 'white',
        fontSize: '28px',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        overflow: 'hidden',
        '@media only screen and (width: 533px) and (height: 320px)': {
        display: 'none',

      },

        '@media only screen and (max-width: 460px) and (min-width: 0px)': {
          flexDirection: 'column',
      },
    //   '@media only screen and (max-width: 539px) and (min-width: 500px)': {
    //     backgroundColor: 'black',
    //     flexDirection: 'row',
    // },
  //   '@media only screen and (max-width: 600px) and (min-width: 540px)': {
  //     backgroundColor: 'red',
  //     flexDirection: 'column',
  // },
    //   '@media only screen and (max-width: 719px) and (min-width: 601px)': {
    //     backgroundColor: 'black',
    //     flexDirection: 'row',
    // },
    '@media only screen and (max-width: 720px) and (min-width: 800px)': {
      flexDirection: 'column',
  },
    },
      flexi1: {
        backgroundColor: 'white',
        width: '38%',
        height:'auto',
        //display: 'flex',
        // alignItems: 'flex-start',
        //justifyContent: 'center',
        zIndex:'10001',
                         '@media only screen and (max-width: 360px) and (min-width: 0px)': {
                        width: '100%',
                        height:'45%'
                    },

                  '@media only screen and (max-width: 460px) and (min-width: 361px)':{
                    width: '100%',
                    height:'50%'
                },
                '@media only screen and (max-width: 500px) and (min-width: 461px)': {
                  width: '50%',
                  height:'100%',
              },
              '@media only screen and (max-width: 640px) and (min-width: 540px)': {
                width: '38%',
                height:'100%'
            },
            //     '@media only screen and (max-width: 719px) and (min-width: 601px)': {


            //   },
              '@media only screen and (max-width: 720px) and (min-width: 800px)': {

            },




              //     '@media only screen and (max-width: 540px) and (min-width: 0px)': {
              //           width: '100%',
              //           height:'45%'
              //       },
              //     '@media only screen and (max-width: 600px) and (min-width: 541px)': {
              //       width: '100%',
              //       height:'45%'
              //   },
              //     '@media only screen and (max-width: 719px) and (min-width: 601px)': {
              //       width: '100%',
              //       height:'50%'
              //   },
              //   '@media only screen and (max-width: 1024px) and (min-width: 720px)': {
              //     width: '100%',
              //     height:'40%'
              // },
      },
      flexi2: {
        backgroundColor: 'lightblue',
        overflowY: 'scroll',
        overflowX: 'hidden',
        width: '62%',
        height:'100%',
        bottom: '0',
                '@media only screen and (max-width: 360px) and (min-width: 0px)':{
          width: '100%',
          height: 'auto',
          fontSize: '24px',
      },
      '@media only screen and (max-width: 600px) and (min-width: 361px)':{
        width: '100%',
        height: '100%',
        fontSize: '24px',
    },
      '@media only screen and (max-width: 640px) and (min-width: 420px)':{
        width: '62%',
        height: '100%',
        fontSize: '24px',
    },

      },
      imageflexblue: {
        position:"relative",
        backgroundColor: '#B4D8E7',
        left: '5%',

      },
      imageflexaqua: {
        position:"reltaive",
        backgroundColor: '#56BAEC',
        width:'100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '0',
      },
      imageflexorange: {
        position:"relative",
        backgroundColor: '#FFEC94',
        width:'100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '0',
      },
      imageflexyellow: {
        position:"relative",
        backgroundColor: '#D6E3B5',
        width:'100%',
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '0',
      },
      logo: {
        position: 'absolute',
        top: '20px',
        //top:'55px',
        width:'150px',
        //height:'79.271px',
        left: '1%',
        height:'auto',
        zIndex: '10001',
        cursor: 'pointer',
        // filter: 'brightness(150%)',
        // ':hover': {
        //   filter: 'grayscale(150%) brightness(150%) contrast(100%) sepia(20%)',
        // },
        filter: 'grayscale(150%) brightness(150%) contrast(100%) sepia(20%)',
        ':hover': {
            filter: 'brightness(150%)',
        },
        '@media only screen and (max-width: 800px) and (min-width: 0px)':{
          width:'100px',
          height:'auto',
      },



  //       '@media only screen and (max-width: 420px) and (min-width: 220px)': {
  //           width:'110px',
  //           height:'auto',
  //           top:'18px',
  //     },
  //     '@media only screen and (max-width: 719px) and (min-width: 419px)': {
  //       width:'100px',
  //       height:'auto',
  //   },
  //     '@media only screen and (max-width: 1024px) and (min-width: 720px)': {
  //       width:'100px',
  //       height:'auto',
  //       top:'18px',
  // },
  //     '@media only screen and (max-width: 1380px) and (min-width: 1280px)': {
  //       width:'120px',
  //       height:'auto',
  //       top:'40px',
  //   },
      },
      work: {
        position: 'absolute',
        top: '32px',
        right: '25%',
        fontSize: '32px',
        color:'grey',
        zIndex: '10001',
        marginRight: '2%',
        cursor: 'pointer',
        ':hover': {
          color: 'red',
        },
        '@media only screen and (max-width: 419px) and (min-width: 0px)':{
          fontSize: '20px',
      },
      '@media only screen and (max-width: 1080px) and (min-width: 420px)':{
        fontSize: '22px',
    },








  //       '@media only screen and (max-width: 420px) and (min-width: 220px)': {
  //         fontSize: '20px',
  //         left:'60%',
  //         top:'30px',
  //     },
  //     '@media only screen and (max-width: 480) and (min-width: 361px)': {

  //     },
  //     '@media only screen and (max-width: 719px) and (min-width: 419px)': {

  //       fontSize: '18px',
  //       top:'54px',
  //   },
  //     '@media only screen and (max-width: 1024px) and (min-width: 720px)': {
  //       fontSize: '22px',
  //       left:'60%',
  //       top:'25px',
  //   },
  //   '@media only screen and (max-width: 1440px) and (min-width: 1280px)': {
  //     fontSize: '26px',
  //     left: '24%',
  //     top:'54px',
  // },
      },
      about: {
        position: 'absolute',
        top: '32px',
        right: '4%',
        fontSize: '32px',
        color:'grey',
        borderBottom: '2px solid grey',
        zIndex: '10001',
        cursor: 'pointer',
        ':hover': {
          color:'red',
          borderBottom: 'none',
        },
        '@media only screen and (max-width: 419px) and (min-width: 0px)':{
          fontSize: '20px',
      },
      '@media only screen and (max-width: 1080px) and (min-width: 420px)':{
        fontSize: '22px',
    },



  //       '@media only screen and (max-width: 420px) and (min-width: 220px)': {
  //         fontSize: '20px',
  //         left:'80%',
  //         top:'30px',
  //     },
  //     '@media only screen and (max-width: 480) and (min-width: 361px)': {
  //     },
  //     '@media only screen and (max-width: 719px) and (min-width: 419px)': {
  //       fontSize: '18px',
  //       left: '33%',
  //       top:'54px',
  //   },
  //     '@media only screen and (max-width: 1024px) and (min-width: 720px)': {
  //       fontSize: '20px',
  //       left:'80%',
  //       top:'25px',
  //   },
  //   '@media only screen and (max-width: 1380px) and (min-width: 1280px)': {
  //     fontSize: '26px',
  //     top:'54px',
  // },
      },


      statement : {
        position: 'absolute',
        bottom: '10%',
        left:'5%',
        '@media only screen and (max-height: 320px)':{
          display: 'none',
      },
      },

    //   Technobackground: {
    //     position:"absolute",
    //     width:'100%',
    //     height:'100%',
    //     bottom: '0',
    //     backgroundColor: 'red',

    //   },
	content: {
    position: 'relative',
    display: 'inline-block',
    color:'black',
    fontSize: '20px',
    width: '100%',
    height: '100%',

	},
      dotCover: {
        position: 'absolute',
        width: '180px',
        height: '40px',
        //backgroundColor: 'red',
        zIndex: '10001',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        '@media only screen and (max-width: 460px) and (min-width: 0px)':{
          bottom:'3%',
          position: 'absolute',
          margin: 'auto',
         // top: '0',
          left: '0',
          bottom: '0',
          right: '0',
      },
      '@media only screen and (max-width: 500px) and (min-width: 461px)': {
        position: 'absolute',
        width: '180px',
        height: '40px',
        //backgroundColor: 'red',
        zIndex: '10001',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        bottom:'2%',
    },
    '@media only screen and (max-width: 566px) and (min-width: 501px)':{
      bottom:'3%',
      position: 'absolute',
      margin: 'auto',
     // top: '0',
      left: '0',
      bottom: '0',
      right: '0',
  },

      },
      dot: {
        position: 'relative',
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'grey',
        zIndex: '10001',
        marginRight: '14px',
        cursor: 'pointer',
      },
      dotSelected: {
        position: 'relative',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'white',
        zIndex: '10001',
        marginRight: '14px',
        cursor: 'pointer',
        display: 'inline-block',
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



    reactcontent1 = "React js is facebook front end library use for buidling UI interface";
    reactcontent2 = "I love React workspace!!";

    reactnativecontent1="React NAtive is web on mobile though making things natively, Awesome right :)";
    Angularjscontent1="Google awesome solution for creating very interactive websites! very much powerful";
    Pythoncontent1="Bots love Python and we love bots who do understand us :D";

    constructor(props) {
    super(props);
    this.state = {

      picContent: this.reactcontent1,
      techName: 'React JS',
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

      cssDot1: styles.dotSelected,
      cssDot4: styles.dot,
      picContent: this.reactcontent2,
      techName: 'React JS',
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

      cssDot1: styles.dot,
      cssDot2: styles.dotSelected,
      picContent: this.reactnativecontent1,
      techName: 'React Native',
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

      picContent: this.Angularjscontent1,
      techName: 'Angular js',
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

      picContent: this.Pythoncontent1,
      techName: 'Python',
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

      cssDot1: styles.dotSelected,
      cssDot3: styles.dot,
      cssDot4: styles.dot,
      cssDot2: styles.dot,
      picContent: this.reactcontent2,
      techName: 'React js',
    });
  }

  stopTimer2() {
    this.clearAllTimeInrerval();
    this.keyframexam;
    //alert("2")
    this.setState({

      cssDot1: styles.dot,
      cssDot3: styles.dot,
      cssDot4: styles.dot,
      cssDot2: styles.dotSelected,
      picContent: this.reactnativecontent1,
      techName: 'React Native',
    });
  }

  stopTimer3() {
    this.clearAllTimeInrerval();
    //alert("3")
    this.setState({

      cssDot1: styles.dot,
      cssDot3: styles.dotSelected,
      cssDot4: styles.dot,
      cssDot2: styles.dot,
      picContent: this.Angularjscontent1,
      techName: 'Angular js',
    });
  }



  stopTimer4() {
    this.clearAllTimeInrerval();
    //alert("4")
    this.setState({

      cssDot1: styles.dot,
      cssDot3: styles.dot,
      cssDot4: styles.dotSelected,
      cssDot2: styles.dot,
      picContent: this.Pythoncontent1,
      techName: 'Python',
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
        <div style={styles.content}>
        <img style={styles.logo} src={logo} />
        <div style={styles.work} key="work">work</div>
        <div style={styles.about} key="about">about</div>
        <p style={styles.statement}>Let's connect</p>
        </div>


        </div>
        <div style={styles.flexi2}>
        {/* <div style={styles.dotCover} key="dotCover">
              <span style={this.state.cssDot1} id="dot1" onClick={this.stopTimer1.bind(this)}></span>
              <span style={this.state.cssDot2} id="dot2"  onClick={this.stopTimer2.bind(this)}></span>
              <span style={this.state.cssDot3} id="dot3" onClick={this.stopTimer3.bind(this)}></span>
              <span style={this.state.cssDot4} id="dot4" onClick={this.stopTimer4.bind(this)}></span>
              </div> */}

            {/* <div style={styles.imageflexblue}> */}
             <p  style={styles.imageflexblue}> about me </p>
             <p style={styles.imageflexblue}> I love deisigning </p>
             <p style={styles.imageflexblue}> coding is what i do for living </p>
             <p style={styles.imageflexblue}> building and shiping i am doing it from my child hood i love it</p>
             <p style={styles.imageflexblue}> making a ship and very exited to launch it in water </p>
             <p style={styles.imageflexblue}> or a paper jet watching its flight</p>
             <p style={styles.imageflexblue}> Or rebasing self make spinners and battle arround with friends and testing it to further enhance it capblities </p>
             <p style={styles.imageflexblue}> more importantly i enjoy the way </p>
             <p style={styles.imageflexblue}> i make things </p>
             <p style={styles.imageflexblue}> designing, </p>
             <p style={styles.imageflexblue}> testing</p>
             <p style={styles.imageflexblue}> developing  </p>
             <p style={styles.imageflexblue}> shiping </p>
             <p style={styles.imageflexblue}>  web apps what i enjoy doing now </p>
            </div>
            {/* </div> */}
            {/* <button  onClick={this.stopTimer.bind(this)}>Stop</button> */}
            {/* <img style={styles.imageflex} id="myImg" alt="robo" src={this.state.pic.toString()} srcSet=""/> */}
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

  const BamesAbout = Radium(app);
  export default BamesAbout;