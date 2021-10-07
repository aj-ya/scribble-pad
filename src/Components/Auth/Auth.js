import React from "react";
//import { ReactDOM } from "react";
import { useHistory } from "react-router";
import "./Auth.css";
//import checkUser from './checkUser.js'
var obj={
  'ajeya':'ajeya'
}
const finalStyle={
  minWidth:'100vw',
  minHeight:'100vh',
};
//import checkUser from './checkUser'
const Auth = () => {
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
                let chngRed=Array.from(document.getElementsByClassName('auth-input'));
                chngRed.forEach((data1)=>{if(data1.value==='')data1.style.border='2px solid red';else data1.style.border='1px solid #bfbfbf'})
                //if(checkUser(data.username,data.password)){
                  //console.log("log");
                //}
                if(data.username===''){
                  document.getElementById('err-user').innerHTML="Username Empty"
                }
                if(data.password===''){
                  document.getElementById('err-pass').innerHTML="Password Empty"
                }
                var found= Object.keys(obj).some(function(k) { if(k===data.username)
                  return obj[k] === data.password;
              });
                if(found===true){
                    history.push('/canvas',{from:'/'})
                  }
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
  const Data = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
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
      <label className='auth-label'>Username:</label>
      <input className='auth-input' ref={usernameRef} type="text" />
      <p id="err-user" className="err"></p>
      <label className='auth-label'>Password:</label>
      <input className='auth-input' ref={passwordRef} type="password" />
      <p id="err-pass" className="err"></p>
      <button className="submit-btn" type='submit'>Login</button>
    </form>
  );
};
export default Auth;
