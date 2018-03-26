import React from 'react';

import ReactDOM from 'react-dom';

import Radium from 'radium';
import {StyleRoot} from 'radium';



var createReactClass = require('create-react-class');
var Carousel = require('nuka-carousel');




function clickio() {
  console.log('button clicked');
}

var divStyle = {
      backi: {
        color: 'pink',
        display:"block",
        width: '80px',
        height:'80px',
        cursor: "pointer",
        backgroundColor: 'royalblue',
      },
      iputi: {
        color: 'pink',
        display:"block",
        width: '1200px',
        height:'20px',
        backgroundColor: 'red',
      },

      utichar: {

        fontSize: '50px',
        position:'relative',
        display:'inline'

      },
      float: {
        float:'left'
      },
      pic: {
        width: '100px',
        display:"inline-block",
        zIndex: '1000'

      }

};

var divMedia = {
  backim: {
    backgroundColor: 'red',


    color: 'white',
    cursor: "pointer",

  },




};




let dataapi = [
  {
    name: "krishna chavali",
    avatar_url : "https://avatars0.githubusercontent.com/u/1?v=4",
    company: "Facebook"
  },
  {
    name: "nani chavali",
    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    company: "google"
  },
]

const Card1 = (props) => {

 CardsData : [
    {
      name: "krishna chavali",
      avatar_url : "https://avatars0.githubusercontent.com/u/1?v=4",
      company: "Facebook"
    },
    {
      name: "nani chavali",
      avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
      company: "google"
    },
  ]


  return(
    <div>
      <img src="http://placehold.it/75" />
      <img width="100px" src= {props.avatar_url} />


    <div>

    <div>{props.name}</div>
    <div> {props.company} </div>
    </div>
    </div>
  );
}

const GithubCard = (props) => {
  return(
    <div>
      From Gitub Card

    <div>
    <Card1 name = "krishna_github"
           avatar_url = "https://avatars3.githubusercontent.com/u/38?v=4"
           company = "github"
    />
    </div>
    </div>
  );
}

const GithubList = (props) => {
  return (
      <div>
      <GithubList />
      </div>
  )
}





const Card = (props) => {
  return(
    <div>
      <img width="100px" src="https://avatars2.githubusercontent.com/u/18922014?v=4" />
      <img width="100px" src= {props.avatar_url} />

      <img style={divStyle.pic} src="https://www.chess.com/dynboard?fen=r1q1r2k/p1p2Qpb/1p2p2N/8/3P1P2/2P4R/PP4PP/2K4R%20w%20-%20-%200%201&size=2" />
      <a href="https://www.chess.com/forum/view/daily-puzzles/2-6-2018-one-too-many-checks">visit chess.com</a>



    <div>



    <div>{props.name}</div>
    <div> {props.company} </div>
    </div>
    </div>
  );
}




const AppCarousel = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (




      <Carousel>
        <img  src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img  src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img  src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img onClick={() => console.log("image4")}  src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img  src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>

        <div style={divStyle.pic}>okey</div>

      </Carousel>



    )
  }
});

console.log("game page");



const Mediaques = () => (
  <StyleRoot>
    <div onClick={() => console.log("U clicked my name")} style={divMedia.backim}>Krishna Chavali
    </div>
  </StyleRoot>
);

// class Radium1 extends React.Component {
//   render() {
//     return (
//         <div style={divStyle.backim}>

//          </div>
//     );
//   }
// }

// ...................Game start...............

class Button extends React.Component {
        // state = { counter: 0 };
        // handleClick = () => {
        //     this.setState((prevState) => ({
        //             counter: prevState.counter + 1
        //     }));
        // };
        //() =>this.props.onClickFunction(this.props.incrementValue)
        handleClick = () => {
             this.props.onClickFunction(this.props.incrementValue);
         };

    render() {
        return (
        <button
         onClick= {this.handleClick} style={divStyle.backi}>
         +{this.props.incrementValue}
        </button> )
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

class Incrom1 extends React.Component {
  state = { counter: 0 };
//   incrementCounter = () => {
//     this.setState((prevState) => ({
//       counter: prevState.counter + 1
// }));
//   };
        incrementCounter = (incrementValue) => {
          this.setState((prevState1) => ({
           counter: prevState1.counter + incrementValue
          }));
        }

  render() {
    return (

        <div>
        <div  style={divStyle.float}><Button incrementValue= {1} onClickFunction = {this.incrementCounter}/></div>
        <div  style={divStyle.float}><Button incrementValue= {5} onClickFunction = {this.incrementCounter}/></div>
        <div  style={divStyle.float}><Button incrementValue= {10} onClickFunction = {this.incrementCounter}/></div>
        <div ><Button incrementValue= {15} onClickFunction = {this.incrementCounter}/></div>
        <div><Result  counter= {this.state.counter}/></div>
        <div><input style={divStyle.iputi}></input></div>
        </div>
    );
  }
}

// ...................Game Ends...............


// ...................Game1 starts...............

class Buttoo extends React.Component {
  handleLikes = (props) => {
    this.props.onClickFunction1(this.props.incrementValue1);
    this.props.onClickFunction2(this.props.socioLife);
};

render() {
  return (
  <button  onClick= {this.handleLikes} style={divStyle.backi}>+{this.props.incrementName}</button> )
}
}

const Notify = (props) => {
  return (
      <div>&#9757;{props.likes}</div>
  )
}

const Emmot = (props) => {
  return (
      <div><figure style={divStyle.utichar}>&#9924;</figure>Social active: {props.emo} %</div>
  )
}


class Emoji extends React.Component {
  state = {
    likes: 0,
    emo: 0
  };


  incrementLikers = (incrementValue1) => {
    this.setState((prevState1) => ({
      likes: prevState1.likes + incrementValue1,
    }));
  }

  incrementLikers2 = (socioLife) => {
    this.setState((prevState2) => ({
      emo: prevState2.emo +  socioLife,

    }));
  }


  render() {
    return (
      <div>
      <div style={divStyle.float}><Buttoo incrementName = {"like"}  incrementValue1= {1} socioLife= {20} onClickFunction1 = {this.incrementLikers } onClickFunction2 = {this.incrementLikers2 }/></div>
      <div style={divStyle.float}><Buttoo incrementName = {"love"} incrementValue1= {1} socioLife= {30}  onClickFunction1 = {this.incrementLikers} onClickFunction2 = {this.incrementLikers2 } /></div>

      <div style={divStyle.float}><Buttoo incrementName = {"haha"} incrementValue1= {1} socioLife= {10}  onClickFunction1 = {this.incrementLikers} onClickFunction2 = {this.incrementLikers2 }/></div>

      <div style={divStyle.float}><Buttoo incrementName = {"wow"} incrementValue1= {1} socioLife= {20}  onClickFunction1 = {this.incrementLikers} onClickFunction2 = {this.incrementLikers2 }/></div>
      <div style={divStyle.float}><Buttoo incrementName = {"sad"} incrementValue1= {1} socioLife= {-10}  onClickFunction1 = {this.incrementLikers} onClickFunction2 = {this.incrementLikers2 }/></div>

      <div><Buttoo incrementName = {"angry"} incrementValue1= {1} socioLife= {-20} onClickFunction1 = {this.incrementLikers} onClickFunction2 = {this.incrementLikers2 }/></div>



      <div><Notify likes= {this.state.likes}/></div>
      <div><Emmot emo= {this.state.emo}/></div>


      </div>
     )
  }
  }
// ...................Game1 Ends...............



//---------------------------upload image ----------------------------------------------------------



class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}









//---------------------------------------------------------------------------------------------------


class Form extends React.Component {
  state = {}
  render() {
    return (

      <form>

        <input placeholder="type github user"/>
        <button type="submit">ADD</button>


      </form>

     )
  }
}




class app extends React.Component {


state = {

  cards: [
    {
      name: "krishna chavali",
      avatar_url : "https://avatars0.githubusercontent.com/u/1?v=4",
      company: "Facebook"
    },
    {
      name: "nani chavali",
      avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
      company: "google"
    },
  ]

}


  render() {
    return (

        <div>


          <div>< Form /></div>
          <div><Card1 /></div>
          <div><GithubCard /></div>

          <div><Card name="krishna"
                     avatar_url = "https://avatars0.githubusercontent.com/u/2?v=4"
                     company = "facebook"
          /></div>



          <div><Emoji /></div>
          {/* <div><Radium1 /></div> */}
          <div><Incrom1 /></div>
          <div><AppCarousel /></div>

          <div><Mediaques /></div>

          <div><ImageUpload  /></div>
        </div>

    );
  }
}
  const Gameo = Radium(app);
  export default Gameo;