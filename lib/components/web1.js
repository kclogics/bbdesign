import React from 'react';
import ReactDOM from 'react-dom';

import Radium from 'radium';
import {StyleRoot} from 'radium';






var img1 = './images/1.jpg';
var img2 = './images/2.jpg';
var img3 = './images/3.jpg';





class GoogleLogin extends React.Component {

  // onFailure(error) {
  //   console.log(error);
  // }
  //   onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  //   console.log(googleUser.getBasicProfile().getName());

  //   var id_token = googleUser.getAuthResponse().id_token;
  // }

  // renderButton() {
  //   gapi.signin2.render('my-signin2', {
  //     'scope': 'profile email',
  //     'width': 240,
  //     'height': 50,
  //     'longtitle': true,
  //     'theme': 'dark',
  //     'onsuccess': onSuccess,
  //     'onfailure': onFailure
  //   });
  // }



  // init() {
  //   gapi.load('auth2', function() {

  //   });
  // }



  // renderButton() {
  //   gapi.signin2.render('my-signin2', {
  //     'scope': 'profile email',
  //     'width': 240,
  //     'height': 50,
  //     'longtitle': true,
  //     'theme': 'dark',
  //     'onsuccess': onSuccess,
  //     'onfailure': onFailure
  //   });
  // }


  // signOut()  {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }



  // init() {
  //   gapi.load('auth2', function() {

  //   });
  // }


  render() {


  const element = <h1>Hello, world!</h1>;

 function init() {
    gapi.load('auth2', function() {

    });
  }

  // function onSignIn(googleUser) {
  //   // var profile = googleUser.getBasicProfile();
  //   // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   // console.log('Name: ' + profile.getName());
  //   // console.log('Image URL: ' + profile.getImageUrl());
  //   // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  //   // console.log(googleUser.getBasicProfile().getName());

  //   // var id_token = googleUser.getAuthResponse().id_token;


  // }


//  function signOut()  {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');

//       document.getElementById("myImg").src = "";

//       var x = document.getElementsByClassName("example");
//       x[0].innerHTML = "hello guest!"

//     });
//   }

  function onFailure(error) {
    console.log(error);
  }

  function renderButton() {
    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'width': 140,
      'height': 20,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }

   function onSuccess(user) {



    console.log('Signed in as ' + user.getBasicProfile().getName());


    var x = document.getElementsByClassName("example");
    x[0].innerHTML = "Hello" + " " + user.getBasicProfile().getName();


     var y =  document.getElementById("myImg").src = user.getBasicProfile().getImageUrl()


  };


    return (

        <div>

          {/* <div class="g-signin2"></div> */}

          {/* <div><a href="#" onClick={signOut}>Sign out</a></div> */}
          <div className="example">Hello Guest!</div>
          <div><img id="myImg" src=" " /></div>
         </div>

    );
  }
}







const ImageInSwing = "200px";


function clickio() {
  console.log('button clicked');
}


var divStyle = {

      backi: {
        color: 'red',
        display:"block",
        width: '25%',
        cursor: "pointer",
      },
      imageo: {



      }
};

var divMedia = {

  backi: {
    backgroundColor: 'pink',
    color: 'green',
    curosr: 'pointer',
  },

  backim: {
    '@media screen and (max-width: 420px) and (min-width: 220px)': {
      color: 'red',
      backgroundColor: 'maroon',

    },


    '@media screen and (max-width: 1120px) and (min-width: 620px)': {
      color: 'white',
      backgroundColor: 'pink',
      position: 'absolute',
      left: '50px',
      cursor: "pointer",

    },
  }

};

console.log("raduim page");

const Mediaques = () => (
  <StyleRoot>
    <div onClick={() => console.log("login clicked")} style={divMedia.backim}>Login

    </div>
  </StyleRoot>
);

class Radium1 extends React.Component {
  render() {
    return (

        <div style={divStyle.backi}>
        <p>Hello</p>
        <p>krish again</p>
        <img width= {ImageInSwing} src= {img2} />

         </div>

    );
  }
}
class WebsiteImage extends React.Component {
  render() {
    return (
      <div>

            <div className= "Name">this is krishna chavali</div>
            <div>
           <img width={ImageInSwing} src= {img2} />
            </div>
        </div>
    );
  }
}

class Website extends React.Component {
  render() {
    return (
          <div>
          <WebsiteImage />
          </div>

    );
  }
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}



function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;


  return (
    <div>
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}

    </ul>

    </div>


  );
}

// -----------------Blog-----------------------------------------------------------------


function Blog(props) {






  const sidebar = props.posts.map((post) =>
  <div key={post.id}>
    <li>{post.title}</li>

  </div>
);



  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>

      <div>{sidebar}</div>

      <hr />
      {content[1]}
      <hr />
    </div>
  );
}

const posts = [
     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];



//----------------------------`````````````````````

//input filed-------------------------------------------------------------------------------------------------'


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


//input filed ends.............................................................................






class app extends React.Component {
  render() {

    const numbers = [1, 2, 3, 4, 5];
    const numbo = [2, 3];
    //const listItems = numbers.map((number,  index) =>
      //<li key={index}>{number}</li> );


    return (


          <div>
            <div> <NameForm /></div>
          <Blog posts={posts} />


          <NumberList numbers={numbers}/>
          <NumberList numbers={numbo} />
          <hr />
          <div><GoogleLogin /></div>
          <div><Radium1 /></div>
          <div><Mediaques /></div>
          <div><Website /> </div>
          <div>  <LoginControl /></div>

          </div>

    );
  }
}


  const Web1 = Radium(app);
  export default Web1;






  //
  //
  // --------------------------learning react------------------------------------- //

// ---------------Lists and Keys

const numbers = [1, 2, 3, 4, 5, 6];
const doubled = numbers.map((number) => number * 3);
console.log(doubled);
console.log(doubled[5]);


