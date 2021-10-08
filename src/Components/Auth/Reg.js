import React from "react";
//import { ReactDOM } from "react";
import { useHistory } from "react-router";
import "./Auth.css";
//import checkUser from './checkUser.js'
// var obj={
//   'ajeya':'ajeya'
// }
const finalStyle={
  maxWidth:'100vw',
  minHeight:'100vh'
};
//import checkUser from './checkUser'
const Register = () => {
  let history = useHistory();
  // const checkLoggedin = () => {
  //   const checkUser = localStorage.getItem("username");
  //   console.log(checkUser);
  //   if (checkUser && window.location.pathname!=='/Display')
  //     history.push("/Display", { from: window.location.pathname })
  //   else
  //     if(window.location.pathname!=='/')
  //     history.push("/",{from:window.location.pathname})
  // };
  // checkLoggedin()
  return (
    <div id="container" style={finalStyle}>
      <div id="app">
        <Form
          onSubmit={(data) => {
            function validateEmail(email) {
              const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(String(email).toLowerCase());
          }
                let chngRed=Array.from(document.getElementsByClassName('auth-input'));
                chngRed.forEach((data1)=>{if(data1.value==='')data1.style.border='2px solid red';else data1.style.border='1px solid #bfbfbf'})
                var p =data.password,
                      errors = false;
                      if(data.email==='') {
                        document.getElementById('err-email').innerHTML="Email empty";
                        errors=true;
                        }
                      else{
                        if(!validateEmail(data.email)){
                          document.getElementById('err-email').innerHTML="Email invalid";
                          errors=true;
                        }
                        else{
                          document.getElementById('err-email').innerHTML="";
                          errors=false;
                        }
                      }
                  if(data.username==='') {
                    document.getElementById('err-user').innerHTML="Username empty";
                    errors=true;
                    }
                  else{
                    //check validity
                    //if(!valid){
                      //errors.push("Choose another username.")
                    }
                  if (p.length < 8) {
                    document.getElementById('err-pass').innerHTML="Your password must be at least 8 characters";
                    errors=true;
                  }
                  if (p.search(/[a-z]/i) < 0) {
                    document.getElementById('err-pass').innerHTML="Your password must contain at least one letter.";
                    errors=true;
                  }
                  if (p.search(/[0-9]/) < 0) {
                    document.getElementById('err-pass').innerHTML="Your password must contain at least one digit."; 
                    errors=true;
                  }
                  if(p!==data.checkpassword){
                    document.getElementById('err-check').innerHTML="Your passwords dont match";
                    errors=true;
                  }
                  if (errors!==true) {
                    //to database
                    history.push('/',{from:'/register'})
                  }
                //if(checkUser(data.username,data.password)){
                  //console.log("log");
                //}
              //   var found= Object.keys(obj).some(function(k) { if(k===data.username)
              //     return obj[k] === data.password;
              // });
                //if(found===true){
                    //history.push('/login',{from:'/'})
                  //}
                }
              }
        />
      </div>
    </div>
  );
};
const Form = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const checkpasswordRef = React.useRef();
  const emailRef=React.useRef();  
  const Data = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      checkpassword: checkpasswordRef.current.value,

    };
    onSubmit(data);
  };
  // const [value, setValue] = React.useState('');
 
  // React.useEffect(() => {
  //   localStorage.setItem('username', value);
  // }, [value]);
 
  // const onChange = event => setValue(event.target.value);
  //onChange={onChange}
  return (
    <form className='auth-form' onSubmit={Data} action="/auth" method="post">
      <h1 id="h1">Scribble Pad</h1>
      <label className='auth-label'>Email Address</label>
      <input className='auth-input' ref={emailRef} type="text" />
      <p id="err-email" className="err"></p>
      <label className='auth-label'>Choose a Username:</label>
      <input className='auth-input' ref={usernameRef} type="text" />
      <p id="err-user" className="err"></p>
      <label className='auth-label'>Choose a Password:</label>
      <input className='auth-input' ref={passwordRef} type="text" />
      <p id="err-pass" className="err"></p>
      <label className='auth-label'>Retype Password:</label>
      <input className='auth-input' ref={checkpasswordRef} type="text" />
      <p id="err-check" className="err"></p>
      <button className="submit-btn" type='submit'>Sign Up</button>
    </form>
  );
};
export default Register;
