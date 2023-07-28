
// // // // // // import Button from '@mui/material/Button';
// // // // // // import  TextField  from '@mui/material/TextField';
// // // // // // import React,{useState} from 'react'
// // // // // // import { Link } from 'react-router-dom';

// // // // // // function Login() {
// // // // // //   const [userName, setuserName] = useState("");
  
// // // // // //   const [password, setPassword] = useState("");
  

// // // // // //   const formHandler=(event)=>{
// // // // // //     event.preventDefault();
// // // // // //     const obj={
// // // // // //       userName:userName,
      
// // // // // //       password:password,
      
// // // // // //     }
    
// // // // // //     console.log(obj);

// // // // // //   }
// // // // // //   return (
// // // // // //     <div className='All'>
// // // // // //      <form onSubmit={formHandler}>
// // // // // //       <div className='btn-log'>
// // // // // //       <Link to='/Login'>
// // // // // //       <Button variant="contained" style={{backgroundColor:"black"}} >Log In</Button>
// // // // // //       </Link>
      
// // // // // //       <Link to='/Signup'>
// // // // // //       <Button variant="outlined" style={{backgroundColor:"white" }}>Sign Up</Button> 
// // // // // //       </Link>
// // // // // //       </div>
// // // // // //     <div className='text'>
// // // // // //     <br></br><TextField id="outlined-basic" label="Username" type="email" variant="outlined"
// // // // // //     value={userName} onChange={e => setuserName(e.target.value)} required /><br></br>
// // // // // //      <br></br><TextField id="outlined-basic" label="PassWord" variant="outlined" onChange={e => setPassword(e.target.value)} required /><br></br>
    
// // // // // //     </div>
// // // // // //     <br></br>
// // // // // //     <div className='cont'>
// // // // // //     <Link to='/land'>
    
// // // // // //     <Button variant="contained" type="submit" style={{backgroundColor:"black",color:"white" }}>Login</Button>
// // // // // //     </Link>
// // // // // //     </div>
// // // // // //     <div className='cns'>
// // // // // //     <br></br>or Connect with Social Media<br></br></div>
// // // // // //     <div className='goog'>
// // // // // //     <Button variant="outlined" style={{color:"black",border:"solid",paddingRight:"10px"}} >Log In with Google</Button></div>
// // // // // //     <br></br>
// // // // // //     <div className='fb'>
// // // // // //     <Button variant="outlined" style={{color:"black",border:"solid" }}>Log In with FaceBook</Button></div>
// // // // // //     </form>

// // // // // //  </div>
// // // // // //   ) 
// // // // // // }

// // // // // // export default Login
// // // // import Button from '@mui/material/Button';
// // // // import TextField from '@mui/material/TextField';
// // // // import React, { useState } from 'react';
// // // // import { Link } from 'react-router-dom';

// // // // function Login() {
// // // //   const [userName, setUserName] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [userNameError, setUserNameError] = useState("");
// // // //   const [passwordError, setPasswordError] = useState("");

// // // //   const formHandler = (event) => {
// // // //     event.preventDefault();
// // // //     let isValid = true;

// // // //     // Validate username field
// // // //     if (userName.trim() === "") {
// // // //       setUserNameError("Please enter a username");
// // // //       isValid = false;
// // // //     } else {
// // // //       setUserNameError("");
// // // //     }

// // // //     // Validate password field
// // // //     if (password.trim() === "") {
// // // //       setPasswordError("Please enter a password");
// // // //       isValid = false;
// // // //     } else {
// // // //       setPasswordError("");
// // // //     }

// // // //     if (isValid) {
// // // //       // Validation passed, perform login logic
// // // //       const obj = {
// // // //         userName: userName,
// // // //         password: password,
// // // //       }
// // // //       console.log(obj);
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className='All'>
// // // //       <form onSubmit={formHandler}>
// // // //         <div className='btn-log'>
// // // //           <Link to='/Login'>
// // // //             <Button variant="contained" style={{ backgroundColor: "black" }}>Log In</Button>
// // // //           </Link>
// // // //           <Link to='/Signup'>
// // // //             <Button variant="outlined" style={{ backgroundColor: "white" }}>Sign Up</Button>
// // // //           </Link>
// // // //         </div>
// // // //         <div className='text'>
// // // //           <br />
// // // //           <TextField
// // // //             id="outlined-basic"
// // // //             label="Username"
// // // //             type="text"
// // // //             variant="outlined"
// // // //             value={userName}
// // // //             onChange={e => setUserName(e.target.value)}
// // // //             error={userNameError !== ""}
// // // //             helperText={userNameError}
// // // //             required
// // // //           />
// // // //           <br /><br />
// // // //           <TextField
// // // //             id="outlined-basic"
// // // //             label="Password"
// // // //             type="password"
// // // //             variant="outlined"
// // // //             value={password}
// // // //             onChange={e => setPassword(e.target.value)}
// // // //             error={passwordError !== ""}
// // // //             helperText={passwordError}
// // // //             required
// // // //           />
// // // //           <br /><br />
// // // //         </div>
// // // //         <div className='cont'>
// // // //           <Link to='/land'>
// // // //             <Button variant="contained" type="submit" style={{ backgroundColor: "black", color: "white" }}>Login</Button>
// // // //           </Link>
// // // //         </div>
// // // //         <div className='cns'>
// // // //           <br />or Connect with Social Media<br />
// // // //         </div>
// // // //         <div className='goog'>
// // // //           <Button variant="outlined" style={{ color: "black", border: "solid", paddingRight: "10px" }}>Log In with Google</Button>
// // // //         </div>
// // // //         <br />
// // // //         <div className='fb'>
// // // //           <Button variant="outlined" style={{ color: "black", border: "solid" }}>Log In with Facebook</Button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Login;
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import Button from '@mui/material/Button';
// // import TextField from '@mui/material/TextField';

// // function Login() {
// //   const [userName, setUserName] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [userNameError, setUserNameError] = useState('');
// //   const [passwordError, setPasswordError] = useState('');

// //   const formHandler = (event) => {
// //     event.preventDefault();
// //     let isValid = true;

// //     // Validate username field
// //     if (userName.trim() === '') {
// //       setUserNameError('Please enter a username');
// //       isValid = false;
// //     } else {
// //       setUserNameError('');
// //     }

// //     // Validate password field
// //     if (password.trim() === '') {
// //       setPasswordError('Please enter a password');
// //       isValid = false;
// //     } else {
// //       setPasswordError('');
// //     }

// //     if (isValid) {
// //       // Validation passed, perform login logic
// //       const obj = {
// //         userName: userName,
// //         password: password,
// //       };
// //       console.log(obj);
// //     }
// //   };

// //   return (
// //     <div className='All'>
// //       <form onSubmit={formHandler}>
// //         <div className='btn-log'>
// //           <Link to='/Login'>
// //             <Button variant='contained' style={{ backgroundColor: 'black' }}>
// //               Log In
// //             </Button>
// //           </Link>
// //           <Link to='/Signup'>
// //             <Button variant='outlined' style={{ backgroundColor: 'white' }}>
// //               Sign Up
// //             </Button>
// //           </Link>
// //         </div>
// //         <div className='text'>
// //           <br />
// //           <TextField
// //             id='outlined-basic'
// //             label='Username'
// //             type='text'
// //             variant='outlined'
// //             value={userName}
// //             onChange={(e) => setUserName(e.target.value)}
// //             error={userNameError !== ''}
// //             helperText={userNameError}
// //             required
// //           />
// //           <br />
// //           <br />
// //           <TextField
// //             id='outlined-basic'
// //             label='Password'
// //             type='password'
// //             variant='outlined'
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             error={passwordError !== ''}
// //             helperText={passwordError}
// //             required
// //           />
// //           <br />
// //           <br />
// //         </div>
// //         <div className='cont'>
// //         <Link to='/land'> 
// //         <Button
// //             variant='contained'
// //             type='submit'
// //             style={{ backgroundColor: 'black', color: 'white' }}
// //           >
// //             Login
// //           </Button>
// //           </Link>
// //         </div>
// //         <div className='cns'>
// //           <br />
// //           or Connect with Social Media<br />
// //         </div>
// //         <div className='goog'>
// //           <Button
// //             variant='outlined'
// //             style={{ color: 'black', border: 'solid', paddingRight: '10px' }}
// //           >
// //             Log In with Google
// //           </Button>
// //         </div>
// //         <br />
// //         <div className='fb'>
// //           <Button variant='outlined' style={{ color: 'black', border: 'solid' }}>
// //             Log In with Facebook
// //           </Button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;
// // // import React, { useState } from 'react';
// // // import './login.css'; // Import the CSS file
// // // import { Link,useNavigate} from 'react-router-dom';


// // // const LoginForm = () => {
// // //   const navigate=useNavigate('');
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // Add your login logic here
// // //     if (email === 'admin@example.com' && password === '12345678') {
// // //       // Successful login, navigate to dashboard
// // //       setError('');
// // //       setEmail('');
// // //       setPassword('');
// // //       navigate('/land');
   
// // //     } else {
// // //       // Invalid credentials, display error message
// // //       setError('Invalid email or password');
// // //     }
// // //   };

// // //   return (
// // //     <div className="login1">
// // //     <div className='form'>
// // //     <form className="login-form" onSubmit={handleSubmit}>

// // //       <h1>Login</h1>
// // //         {error && <p >{error}</p>}
// // //         <div className="div1">
// // //         <input
         
// // //           type="email"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           required
// // //         />
// // //         </div>
// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           required
// // //         />
      
// // //    <button type="submit">Login</button>
// // //       <br></br>
// // //       <div className="links-container">
// // //       <br></br>
// // //         <p className='textcenter'>Don't have an account?</p> <Link to='/signup'><center><button>Sign Up</button></center></Link> 
// // //       </div>
// // //     </form>
// // //     </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginForm;
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import Button from '@mui/material/Button';
// // import TextField from '@mui/material/TextField';

// // function Login() {
// //   const [userName, setUserName] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [userNameError, setUserNameError] = useState('');
// //   const [passwordError, setPasswordError] = useState('');

// //   const formHandler = (event) => {
// //     event.preventDefault();
// //     let isValid = true;

// //     // Validate username field
// //     if (userName.trim() === '') {
// //       setUserNameError('Please enter a username');
// //       isValid = false;
// //     } else {
// //       setUserNameError('');
// //     }

// //     // Validate password field
// //     if (password.trim() === '') {
// //       setPasswordError('Please enter a password');
// //       isValid = false;
// //     } else {
// //       setPasswordError('');
// //     }

// //     if (isValid) {
// //       // Validation passed, perform login logic
// //       const obj = {
// //         userName: userName,
// //         password: password,
// //       };
// //       console.log(obj);
// //     }
// //   };

// //   return (
// //     <div className='All'>
// //       <form onSubmit={formHandler}>
// //         <div className='btn-log'>
// //           <Link to='/Login'>
// //             <Button variant='contained' style={{ backgroundColor: 'black' }}>
// //               Log In
// //             </Button>
// //           </Link>
// //           <Link to='/Signup'>
// //             <Button variant='outlined' style={{ backgroundColor: 'white' }}>
// //               Sign Up
// //             </Button>
// //           </Link>
// //         </div>
// //         <div className='text'>
// //           <br />
// //           <TextField
// //             id='outlined-basic'
// //             label='Username'
// //             type='username'
// //             variant='outlined'
// //             value={userName}
// //             onChange={(e) => setUserName(e.target.value)}
// //             error={userNameError !== ''}
// //             helperText={userNameError}
// //             required
// //           />
// //           <br />
// //           <br />
// //           <TextField
// //             id='outlined-basic'
// //             label='Password'
// //             type='password'
// //             variant='outlined'
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             error={passwordError !== ''}
// //             helperText={passwordError}
// //             required
// //           />
// //           <br />
// //           <br />
// //         </div>
// //         <div className='cont'>
// //        <Link to  ='/land'>
// //         <Button
// //             variant='contained'
// //             type='submit'
// //             style={{ backgroundColor: 'black', color: 'white' }}
// //           >
// //             Login
// //           </Button>
// //           </Link>
// //         </div>
// //         <div className='cns'>
// //           <br />
// //           or Connect with Social Media<br />
// //         </div>
// //         <div className='goog'>
// //           <Button
// //             variant='outlined'
// //             style={{ color: 'black', border: 'solid', paddingRight: '10px' }}
// //           >
// //             Log In with Google
// //           </Button>
// //         </div>
// //         <br />
// //         <div className='fb'>
// //           <Button variant='outlined' style={{ color: 'black', border: 'solid' }}>
// //             Log In with Facebook
// //           </Button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';

// function Login() {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [userNameError, setUserNameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const formHandler = (event) => {
//     event.preventDefault();
//     let isValid = true;

//     // Validate username field
//     if (userName.trim() === '') {
//       setUserNameError('Please enter a username');
//       isValid = false;
//     } else {
//       setUserNameError('');
//     }

//     // Validate password field
//     if (password.trim() === '') {
//       setPasswordError('Please enter a password');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (isValid) {
//       // Validation passed, perform login logic
//       const loginUser = {
//         userName: userName,
//         password: password,
//       };

//       axios.post('http://localhost:8080/api/user/login', loginUser)
//         .then((response) => {
//           console.log(response.data);
//           // Handle successful login, e.g., store user data in state or local storage
//         })
//         .catch((error) => {
//           console.error(error.response.data);
//           // Handle error during login, e.g., show an error message
//         });
//     }
//   };
//   return (
//     <div className='All'>
//       <form onSubmit={formHandler}>
//         <div className='btn-log'>
//           <Link to='/Login'>
//             <Button variant='contained' style={{ backgroundColor: 'black' }}>
//               Log In
//             </Button>
//           </Link>
//           <Link to='/Signup'>
//             <Button variant='outlined' style={{ backgroundColor: 'white' }}>
//               Sign Up
//             </Button>
//           </Link>
//         </div>
//         <div className='text'>
//           <br />
//           <TextField
//             id='outlined-basic'
//             label='Username'
//             type='username'
//             variant='outlined'
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             error={userNameError !== ''}
//             helperText={userNameError}
//             required
//           />
//           <br />
//           <br />
//           <TextField
//             id='outlined-basic'
//             label='Password'
//             type='password'
//             variant='outlined'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={passwordError !== ''}
//             helperText={passwordError}
//             required
//           />
//           <br />
//           <br />
//         </div>
//         <div className='cont'>
//        <Link to  ='/land'>
//         <Button
//             variant='contained'
//             type='submit'
//             style={{ backgroundColor: 'black', color: 'white' }}
//           >
//             Login
//           </Button>
//           </Link>
//         </div>
//         <div className='cns'>
//           <br />
//           or Connect with Social Media<br />
//         </div>
//         <div className='goog'>
//           <Button
//             variant='outlined'
//             style={{ color: 'black', border: 'solid', paddingRight: '10px' }}
//           >
//             Log In with Google
//           </Button>
//         </div>
//         <br />
//         <div className='fb'>
//           <Button variant='outlined' style={{ color: 'black', border: 'solid' }}>
//             Log In with Facebook
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './login.css';
// import axios from 'axios';
// function Login() {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [userNameError, setUserNameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const formHandler = (event) => {
//     event.preventDefault();
//     let isValid = true;

//     // Validate username field
//     if (userName.trim() === '') {
//       setUserNameError('Please enter a username');
//       isValid = false;
//     } else {
//       setUserNameError('');
//     }

//     // Validate password field
//     if (password.trim() === '') {
//       setPasswordError('Please enter a password');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (isValid) {
//       // Validation passed, perform login logic
//       const loginUser = {
//         userName: userName,
//         password: password,
//       };

//       // Perform your login API call here
//       // For example:
//       axios.post('http://localhost:8080/auth/login', loginUser)
//         .then((response) => {
//           console.log(response.data);
//           // Handle successful login, e.g., store user data in state or local storage
//           window.location.href = './land'
//         })
//         .catch((error) => {
//           console.error(error.response.data);
//           // Handle error during login, e.g., show an error message
//         });
//     }
//   };

//   return (
//     <div className='All'>
//       <form onSubmit={formHandler}>
//         <div className='btn-log'>
//           <Link to='/Signup'>
//             <center><button style={{ backgroundColor: 'black', border: '1px solid black', padding: '8px 16px',color:'white' }}>
//               Sign Up
//             </button>
//             </center>
//           </Link>
//         </div>
//         <div className='text'>
//           <br />
//           <input
//             type='text'
//             placeholder='Username'
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
//           <br />
//           <br />
//           <input
//             type='password'
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
//           <br />
//           <br />
//         </div>
//         <div className='cont'>
       
//           <button type='submit' style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px' }}>
//             Login
//           </button>
      
//         </div>
//         <div className='cns'>
//           <br />
//           or Connect with Social Media<br />
//         </div>
//         <div className='goog'>
//           <button style={{ color: 'black', border: '1px solid black', padding: '8px 16px' }}>
//             Log In with Google
//           </button>
//         </div>
//         <br />
//         <div className='fb'>
       
//           <button style={{ color: 'black', border: '1px solid black', padding: '8px 16px' }}>
//             Log In with Facebook
//           </button>

//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState(''); // Changed from 'userName' to 'email'
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(''); // Changed from 'userNameError' to 'emailError'
  const [passwordError, setPasswordError] = useState('');

  const formHandler = (event) => {
    event.preventDefault();
    let isValid = true;

    // Validate email field
    if (email.trim() === '') {
      setEmailError('Please enter an email');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password field
    if (password.trim() === '') {
      setPasswordError('Please enter a password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Validation passed, perform login logic
      const loginUser = {
        email: email, // Changed from 'userName' to 'email'
        password: password
      };

      // Perform your login API call here
      // For example:
      axios.post('http://localhost:8081/auth/login', loginUser)
        .then((response) => {
          console.log("logged in");
            console.log(response.data);
          // Handle successful login, e.g., store user data in state or local storage
          window.location.href = '/land'
        })
        .catch((error) => {
          console.error(error.response.data);
          // Handle error during login, e.g., show an error message
        });
    }
  };

  
  return (
    <div className='All'>
      <form onSubmit={formHandler}>
        <div className='btn-log'>
          <Link to='/Signup'>
            <center><button style={{ backgroundColor: 'black', border: '1px solid black', padding: '8px 16px',color:'white' }}>
              Sign Up
            </button>
            </center>
          </Link>
        </div>
        <div className='text'>
          <br />
          <input
            type='text' // Changed from 'text' to 'email'
            placeholder='Email' // Changed from 'Username' to 'Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Changed from 'setUserName' to 'setEmail'
          />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          <br />
          <br />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
          <br />
          <br />
        </div>
        <div className='cont'>
       
          <button type='submit' style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px' }}>
            Login
          </button>
      
        </div>
        <div className='cns'>
          <br />
          or Connect with Social Media<br />
        </div>
        <div className='goog'>
          <button style={{ color: 'black', border: '1px solid black', padding: '8px 16px' }}>
            Log In with Google
          </button>
        </div>
        <br />
        <div className='fb'>
       
          <button style={{ color: 'black', border: '1px solid black', padding: '8px 16px' }}>
            Log In with Facebook
          </button>

        </div>
      </form>
    </div>
  );
}

export default Login;