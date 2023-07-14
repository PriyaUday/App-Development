
// // import Button from '@mui/material/Button';
// // import  TextField  from '@mui/material/TextField';
// // import React,{useState} from 'react'
// // import { Link } from 'react-router-dom';

// // function Login() {
// //   const [userName, setuserName] = useState("");
  
// //   const [password, setPassword] = useState("");
  

// //   const formHandler=(event)=>{
// //     event.preventDefault();
// //     const obj={
// //       userName:userName,
      
// //       password:password,
      
// //     }
    
// //     console.log(obj);

// //   }
// //   return (
// //     <div className='All'>
// //      <form onSubmit={formHandler}>
// //       <div className='btn-log'>
// //       <Link to='/Login'>
// //       <Button variant="contained" style={{backgroundColor:"black"}} >Log In</Button>
// //       </Link>
      
// //       <Link to='/Signup'>
// //       <Button variant="outlined" style={{backgroundColor:"white" }}>Sign Up</Button> 
// //       </Link>
// //       </div>
// //     <div className='text'>
// //     <br></br><TextField id="outlined-basic" label="Username" type="email" variant="outlined"
// //     value={userName} onChange={e => setuserName(e.target.value)} required /><br></br>
// //      <br></br><TextField id="outlined-basic" label="PassWord" variant="outlined" onChange={e => setPassword(e.target.value)} required /><br></br>
    
// //     </div>
// //     <br></br>
// //     <div className='cont'>
// //     <Link to='/land'>
    
// //     <Button variant="contained" type="submit" style={{backgroundColor:"black",color:"white" }}>Login</Button>
// //     </Link>
// //     </div>
// //     <div className='cns'>
// //     <br></br>or Connect with Social Media<br></br></div>
// //     <div className='goog'>
// //     <Button variant="outlined" style={{color:"black",border:"solid",paddingRight:"10px"}} >Log In with Google</Button></div>
// //     <br></br>
// //     <div className='fb'>
// //     <Button variant="outlined" style={{color:"black",border:"solid" }}>Log In with FaceBook</Button></div>
// //     </form>

// //  </div>
// //   ) 
// // }

// // export default Login
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Login() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [userNameError, setUserNameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const formHandler = (event) => {
//     event.preventDefault();
//     let isValid = true;

//     // Validate username field
//     if (userName.trim() === "") {
//       setUserNameError("Please enter a username");
//       isValid = false;
//     } else {
//       setUserNameError("");
//     }

//     // Validate password field
//     if (password.trim() === "") {
//       setPasswordError("Please enter a password");
//       isValid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (isValid) {
//       // Validation passed, perform login logic
//       const obj = {
//         userName: userName,
//         password: password,
//       }
//       console.log(obj);
//     }
//   }

//   return (
//     <div className='All'>
//       <form onSubmit={formHandler}>
//         <div className='btn-log'>
//           <Link to='/Login'>
//             <Button variant="contained" style={{ backgroundColor: "black" }}>Log In</Button>
//           </Link>
//           <Link to='/Signup'>
//             <Button variant="outlined" style={{ backgroundColor: "white" }}>Sign Up</Button>
//           </Link>
//         </div>
//         <div className='text'>
//           <br />
//           <TextField
//             id="outlined-basic"
//             label="Username"
//             type="text"
//             variant="outlined"
//             value={userName}
//             onChange={e => setUserName(e.target.value)}
//             error={userNameError !== ""}
//             helperText={userNameError}
//             required
//           />
//           <br /><br />
//           <TextField
//             id="outlined-basic"
//             label="Password"
//             type="password"
//             variant="outlined"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             error={passwordError !== ""}
//             helperText={passwordError}
//             required
//           />
//           <br /><br />
//         </div>
//         <div className='cont'>
//           <Link to='/land'>
//             <Button variant="contained" type="submit" style={{ backgroundColor: "black", color: "white" }}>Login</Button>
//           </Link>
//         </div>
//         <div className='cns'>
//           <br />or Connect with Social Media<br />
//         </div>
//         <div className='goog'>
//           <Button variant="outlined" style={{ color: "black", border: "solid", paddingRight: "10px" }}>Log In with Google</Button>
//         </div>
//         <br />
//         <div className='fb'>
//           <Button variant="outlined" style={{ color: "black", border: "solid" }}>Log In with Facebook</Button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login;
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    let isValid = true;

    // Validate username field
    if (userName.trim() === "") {
      setUserNameError("Please fill this field");
      isValid = false;
    } else {
      setUserNameError("");
    }

    // Validate password field
    if (password.trim() === "") {
      setPasswordError("Please fill this field");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      // Validation passed, perform login logic
      const obj = {
        userName: userName,
        password: password,
      }
      console.log(obj);
    }
  }

  return (
    <div className='All'>
      <form onSubmit={formHandler}>
        <div className='btn-log'>
          <Link to='/Login'>
            <Button variant="contained" style={{ backgroundColor: "black" }}>Log In</Button>
          </Link>
          <Link to='/Signup'>
            <Button variant="outlined" style={{ backgroundColor: "white" }}>Sign Up</Button>
          </Link>
        </div>
        <div className='text'>
          <br />
          <TextField
            id="outlined-basic"
            label="Username"
            type="text"
            variant="outlined"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            error={userNameError !== ""}
            helperText={userNameError}
            required
          />
          <br /><br />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={passwordError !== ""}
            helperText={passwordError}
            required
          />
          <br /><br />
        </div>
        <div className='cont'>
          <Link to='/land'>
            <Button variant="contained" type="submit" style={{ backgroundColor: "black", color: "white" }}>Login</Button>
          </Link>
        </div>
        <div className='cns'>
          <br />or Connect with Social Media<br />
        </div>
        <div className='goog'>
          <Button variant="outlined" style={{ color: "black", border: "solid", paddingRight: "10px" }}>Log In with Google</Button>
        </div>
        <br />
        <div className='fb'>
          <Button variant="outlined" style={{ color: "black", border: "solid" }}>Log In with Facebook</Button>
        </div>
      </form>
    </div>
  )
}

export default Login;
