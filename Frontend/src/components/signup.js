
// // // // import Button from '@mui/material/Button';
// // // // import  TextField  from '@mui/material/TextField';

// // // // import React, {useState}from 'react'
// // // // import {Link} from 'react-router-dom'

// // // // function Signup() {
// // // //   const [firstName, setFirstName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [num, setNum] = useState("");

// // // // // const[error,setEror]= useState(false)

// // // // const formHandler=(event)=>{
// // // //     event.preventDefault();
// // // //     const obj={
// // // //         firstName:firstName,
// // // //         num:num,
// // // //         password:password,
// // // //         email:email
// // // //         }
        
// // // // console.log(obj);


// // // //     //axios.post(ur1/obj);

// // // // }

  
// // // //   return (
     
// // // //     <div className='All'>
// // // //     <div className='btn'>
// // // //     <Link to='/Login'>
// // // //     <Button variant="outlined" style={{backgroundColor:"white"}} >Log In</Button>
// // // //     </Link>
// // // //     <Link to='/Signup'>
// // // //     <Button variant="contained" style={{backgroundColor:"black" }}>Sign Up</Button> 
// // // //     </Link>
// // // //     </div>

// // // //     <form onSubmit={formHandler}>

// // // //     <div className='text'>
// // // //     <br></br><TextField id="outlined-name" label="Enter your name" variant="outlined" value={firstName} onChange={e => setFirstName(e.target.value)} required />

// // // //     <br></br>

// // // //     <br></br><TextField type="email" id="outlined-name" label="Enter your email" variant="outlined" value={email}  onChange={e => setEmail(e.target.value)} required/><br></br>
    
// // // //     </div>
// // // //     <div> 
// // // //     <br></br>
// // // //     <TextField
// // // //           id="outlined-number"
// // // //           label="Enter your Number"
// // // //           type="number"
// // // //           value={num}
// // // //           onChange={e => setNum(e.target.value)}
// // // //          required
// // // //         />
// // // //         <br></br><br></br>
// // // //     <TextField
// // // //           id="contained-password-input"
// // // //           label="Password"
// // // //           type="password"
// // // //           autoComplete="current-password"
// // // //           value={password}
// // // //           onChange={e => setPassword(e.target.value)}
          
// // // //         />
// // // //     </div>
// // // //     <br/>
// // // //    <Link to='/land'>
// // // //    <Button variant="contained" style={{backgroundColor:"black" }}>Sign Up</Button> 
// // // //     </Link>
// // // //     </form>

    
 
// // // // </div>
// // // //   ) 
// // // // }

// // // // export default Signup
// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import Button from '@mui/material/Button';
// // // import TextField from '@mui/material/TextField';

// // // function Signup() {
// // //   const [firstName, setFirstName] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [num, setNum] = useState('');
// // //   const [firstNameError, setFirstNameError] = useState('');
// // //   const [emailError, setEmailError] = useState('');
// // //   const [passwordError, setPasswordError] = useState('');
// // //   const [numError, setNumError] = useState('');

// // //   const formHandler = (event) => {
// // //     event.preventDefault();
// // //     let isValid = true;

// // //     // Validate first name field
// // //     if (firstName.trim() === '') {
// // //       setFirstNameError('Please enter your name');
// // //       isValid = false;
// // //     } else {
// // //       setFirstNameError('');
// // //     }

// // //     // Validate email field
// // //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     if (email.trim() === '' || !emailPattern.test(email)) {
// // //       setEmailError('Please enter a valid email address');
// // //       isValid = false;
// // //     } else {
// // //       setEmailError('');
// // //     }

// // //     // Validate number field
// // //     const numPattern = /^\d+$/;
// // //     if (num.trim() === '' || !numPattern.test(num)) {
// // //       setNumError('Please enter a valid number');
// // //       isValid = false;
// // //     } else {
// // //       setNumError('');
// // //     }

// // //     // Validate password field
// // //     if (password.trim() === '') {
// // //       setPasswordError('Please enter a password');
// // //       isValid = false;
// // //     } else {
// // //       setPasswordError('');
// // //     }

// // //     if (isValid) {
// // //       // Validation passed, perform signup logic
// // //       const obj = {
// // //         firstName: firstName,
// // //         num: num,
// // //         password: password,
// // //         email: email,
// // //       };
// // //       console.log(obj);
// // //     }
// // //   };

// // //   return (
// // //     <div className='All'>
// // //       <div className='btn'>
// // //         <Link to='/Login'>
// // //           <Button variant='outlined' style={{ backgroundColor: 'white' }}>
// // //             Log In
// // //           </Button>
// // //         </Link>
// // //         <Link to='/Signup'>
// // //           <Button variant='contained' style={{ backgroundColor: 'black' }}>
// // //             Sign Up
// // //           </Button>
// // //         </Link>
// // //       </div>

// // //       <form onSubmit={formHandler}>
// // //         <div className='text'>
// // //           <br />
// // //           <TextField
// // //             id='outlined-name'
// // //             label='Enter your name'
// // //             variant='outlined'
// // //             value={firstName}
// // //             onChange={(e) => setFirstName(e.target.value)}
// // //             error={firstNameError !== ''}
// // //             helperText={firstNameError}
// // //             required
// // //           />

// // //           <br />
// // //           <br />
// // //           <TextField
// // //             type='email'
// // //             id='outlined-name'
// // //             label='Enter your email'
// // //             variant='outlined'
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             error={emailError !== ''}
// // //             helperText={emailError}
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <br />
// // //           <TextField
// // //             id='outlined-number'
// // //             label='Enter your Number'
// // //             type='number'
// // //             value={num}
// // //             onChange={(e) => setNum(e.target.value)}
// // //             error={numError !== ''}
// // //             helperText={numError}
// // //             required
// // //           />
// // //           <br />
// // //           <br />
// // //           <TextField
// // //             id='contained-password-input'
// // //             label='Password'
// // //             type='password'
// // //             autoComplete='current-password'
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             error={passwordError !== ''}
// // //             helperText={passwordError}
// // //             required
// // //           />
// // //         </div>
// // //         <br />
// // //         <Link to='/land'>
// // //           <Button variant='contained' style={{ backgroundColor: 'black' }}>
// // //             Sign Up
// // //           </Button>
// // //         </Link>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Signup;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// function Signup() {
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [num, setNum] = useState('');
//   const [firstNameError, setFirstNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [numError, setNumError] = useState('');

//   const formHandler = (event) => {
//     event.preventDefault();
//     let isValid = true;

//     // Validate first name field
//     if (firstName.trim() === '') {
//       setFirstNameError('Please enter your name');
//       isValid = false;
//     } else {
//       setFirstNameError('');
//     }

//     // Validate email field
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.trim() === '' || !emailPattern.test(email)) {
//       setEmailError('Please enter a valid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Validate number field
//     const numPattern = /^\d+$/;
//     if (num.trim() === '' || !numPattern.test(num)) {
//       setNumError('Please enter a valid number');
//       isValid = false;
//     } else {
//       setNumError('');
//     }

//     // Validate password field
//     if (password.trim() === '') {
//       setPasswordError('Please enter a password');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (isValid) {
//       // Validation passed, perform signup logic
//       const obj = {
//         firstName: firstName,
//         num: num,
//         password: password,
//         email: email,
//       };
//       console.log(obj);
//     }
//   };

//   return (
//     <div className='All'>
//       <div className='btn'>
//         <Link to='/Login'>
//           <Button variant='outlined' style={{ backgroundColor: 'white' }}>
//             Log In
//           </Button>
//         </Link>
//         <Link to='/Signup'>
//           <Button variant='contained' style={{ backgroundColor: 'black' }}>
//             Sign Up
//           </Button>
//         </Link>
//       </div>

//       <form onSubmit={formHandler}>
//         <div className='text'>
//           <br />
//           <TextField
//             id='outlined-name'
//             label='Enter your name'
//             variant='outlined'
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             error={firstNameError !== ''}
//             helperText={firstNameError}
//             required
//           />

//           <br />
//           <br />
//           <TextField
//             type='email'
//             id='outlined-name'
//             label='Enter your email'
//             variant='outlined'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={emailError !== ''}
//             helperText={emailError}
//             required
//           />
//         </div>
//         <div>
//           <br />
//           <TextField
//             id='outlined-number'
//             label='Enter your Number'
//             type='number'
//             value={num}
//             onChange={(e) => setNum(e.target.value)}
//             error={numError !== ''}
//             helperText={numError}
//             required
//           />
//           <br />
//           <br />
//           <TextField
//             id='contained-password-input'
//             label='Password'
//             type='password'
//             autoComplete='current-password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={passwordError !== ''}
//             helperText={passwordError}
//             required
//           />
//         </div>
//         <br />
//         <Link to='/land'>
//         <Button variant='contained' type='submit' style={{ backgroundColor: 'black' }}>
//           Sign Up
//         </Button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default Signup;
// // import React, { useState } from 'react';
// // import { Link,useNavigate } from 'react-router-dom';
// // import './signup.css';
// // import axios from 'axios';

// // const Signup= () => {
// //   const navigate=useNavigate('');
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleSignUp = (e) => {
// //     e.preventDefault();
// //     const BASE_URL = "http://localhost:8080";
// //     // Make the API request to register
// //     axios.post(BASE_URL + '/users/register', { name, email, password })
// //       .then(response => {
// //         // Handle the successful registration (e.g., set authentication state, redirect, etc.)
// //         console.log('Registered:', response.data);
// //       })
// //       .catch(error => {
// //         // Handle registration error (e.g., display error message)
// //         console.error('Registration failed:', error.response.data);
// //       })
// //       if (name === '' && email === '' && password === '' && confirmPassword === '') {
// //         setError('Please fill in all fields.');
// //       } else if (password !== confirmPassword) {
// //         setError('Passwords do not match.');
// //       } else {
// //         setError('Registration successful!');
// //         navigate("/land");
// //         <Link to="/pass">SIGN UP</Link>
// //       };
// //   };
  

// //   return (
// //     <div className="body1">
// //     <div name="class1">
    
// //       <center><h1>Register Form</h1></center>
// //       <br/>
// //       <form className="form1"onSubmit={handleSignUp}>
// //         <label className="name1">
// //           Name: 
// //         </label>
// //         <div className="fld1">
// //           <input
// //             type="text"
// //             value={name}
// //             name = "name"
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //           </div>
// //         <label className="name2">
// //           Email:
// //         </label>
// //         <div className="fld2">
// //           <input
// //             type="email"
// //             name="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //           </div>
// //         <label className="name3">
// //           Password:
// //         </label>
// //         <div className="fld3">
// //           <input
// //             type="password"
// //             value={password}
// //             name = "password"
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           </div>
// //           <label className="name3">
// //             ConfirmPassword:
// //           </label>
// //           <div className="fld3">
// //             <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required/>
// //           </div>
// //           {error && <p className="error-message">{error}</p>}

// //         <br/>
// //         <Link to = "/login"><button type="submit" onClick={handleSignUp}>Sign Up</button></Link>
        
// //       </form>
// //       </div>
// //     </div>
// //   );
// //   }
// // export default Signup
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// function Signup() {
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [num, setNum] = useState('');
//   const [firstNameError, setFirstNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [numError, setNumError] = useState('');

//   const formHandler = (event) => {
//     event.preventDefault();
//     let isValid = true;

//     // Validate first name field
//     if (firstName.trim() === '') {
//       setFirstNameError('Please enter your name');
//       isValid = false;
//     } else {
//       setFirstNameError('');
//     }

//     // Validate email field
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.trim() === '' || !emailPattern.test(email)) {
//       setEmailError('Please enter a valid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Validate number field
//     const numPattern = /^\d+$/;
//     if (num.trim() === '' || !numPattern.test(num)) {
//       setNumError('Please enter a valid number');
//       isValid = false;
//     } else {
//       setNumError('');
//     }

//     // Validate password field
//     if (password.trim() === '') {
//       setPasswordError('Please enter a password');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (isValid) {
//       // Validation passed, perform signup logic
//       const obj = {
//         firstName: firstName,
//         num: num,
//         password: password,
//         email: email,
//       };
//       console.log(obj);
//     }
//   };

//   return (
//     <div className='All'>
//       <div className='btn'>
//         <Link to='/Login'>
//           <Button variant='outlined' style={{ backgroundColor: 'white' }}>
//             Log In
//           </Button>
//         </Link>
//         <Link to='/Signup'>
//           <Button variant='contained' style={{ backgroundColor: 'black' }}>
//             Sign Up
//           </Button>
//         </Link>
//       </div>

//       <form onSubmit={formHandler}>
//         <div className='text'>
//           <br />
//           <TextField
//             type='name'
//             id='outlined-name'
//             label='Enter your name'
//             variant='outlined'
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             error={firstNameError !== ''}
//             helperText={firstNameError}
//             required
//           />

//           <br />
//           <br />
//           <TextField
//             type='email'
//             id='outlined-name'
//             label='Enter your email'
//             variant='outlined'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={emailError !== ''}
//             helperText={emailError}
//             required
//           />
//         </div>
//         <div>
//           <br />
//           <TextField
//             id='outlined-number'
//             label='Enter your Number'
//             type='number'
//             value={num}
//             onChange={(e) => setNum(e.target.value)}
//             error={numError !== ''}
//             helperText={numError}
//             required
//           />
//           <br />
//           <br />
//           <TextField
//             id='contained-password-input'
//             label='Password'
//             type='password'
//             autoComplete='current-password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={passwordError !== ''}
//             helperText={passwordError}
//             required
//           />
//         </div>
//         <br />
//         <Link to ='/land'>
//         <Button variant='contained' type='submit' style={{ backgroundColor: 'black' }}>
//           Sign Up
//         </Button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';

// function Signup() {
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [num, setNum] = useState('');
//   const [firstNameError, setFirstNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [numError, setNumError] = useState('');

//   const formHandler = (event) => {
//     event.preventDefault();
//     let isValid = true;

//     // Validate first name field
//     if (firstName.trim() === '') {
//       setFirstNameError('Please enter your name');
//       isValid = false;
//     } else {
//       setFirstNameError('');
//     }

//     // Validate email field
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.trim() === '' || !emailPattern.test(email)) {
//       setEmailError('Please enter a valid email address');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Validate number field
//     const numPattern = /^\d+$/;
//     if (num.trim() === '' || !numPattern.test(num)) {
//       setNumError('Please enter a valid number');
//       isValid = false;
//     } else {
//       setNumError('');
//     }

//     // Validate password field
//     if (password.trim() === '') {
//       setPasswordError('Please enter a password');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (isValid) {
//       // Validation passed, perform signup logic
//       const newUser = {
//         firstName: firstName,
//         email: email,
//         password: password,
//         phoneNumber: num,
//       };

//       axios.post('http://localhost:8080/api/user/signup', newUser)
//         .then((response) => {
//           console.log(response.data);
//           // Handle successful signup, e.g., show a success message or redirect to a new page
//         })
//         .catch((error) => {
//           console.error(error.response.data);
//           // Handle error during signup, e.g., show an error message
//         });
//     }
//   };

//   return (
//     <div className='All'>
//       <div className='btn'>
//         <Link to='/Login'>
//           <Button variant='outlined' style={{ backgroundColor: 'white' }}>
//             Log In
//           </Button>
//         </Link>
//         <Link to='/Signup'>
//           <Button variant='contained' style={{ backgroundColor: 'black' }}>
//             Sign Up
//           </Button>
//         </Link>
//       </div>

//       <form onSubmit={formHandler}>
//         <div className='text'>
//           <br />
//           <TextField
//             type='name'
//             id='outlined-name'
//             label='Enter your name'
//             variant='outlined'
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             error={firstNameError !== ''}
//             helperText={firstNameError}
//             required
//           />

//           <br />
//           <br />
//           <TextField
//             type='email'
//             id='outlined-name'
//             label='Enter your email'
//             variant='outlined'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={emailError !== ''}
//             helperText={emailError}
//             required
//           />
//         </div>
//         <div>
//           <br />
//           <TextField
//             id='outlined-number'
//             label='Enter your Number'
//             type='number'
//             value={num}
//             onChange={(e) => setNum(e.target.value)}
//             error={numError !== ''}
//             helperText={numError}
//             required
//           />
//           <br />
//           <br />
//           <TextField
//             id='contained-password-input'
//             label='Password'
//             type='password'
//             autoComplete='current-password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={passwordError !== ''}
//             helperText={passwordError}
//             required
//           />
//         </div>
//         <br />
//         <Link to='/land'>
//           <Button variant='contained' type='submit' style={{ backgroundColor: 'black' }}>
//             Sign Up
//           </Button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [num, setNum] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [numError, setNumError] = useState('');

  const formHandler = (event) => {
    event.preventDefault();
    let isValid = true;

    // Validate first name field
    if (firstName.trim() === '') {
      setFirstNameError('Please enter your name');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    // Validate email field
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate number field
    const numPattern = /^\d+$/;
    if (num.trim() === '' || !numPattern.test(num)) {
      setNumError('Please enter a valid number');
      isValid = false;
    } else {
      setNumError('');
    }

    // Validate password field
    if (password.trim() === '') {
      setPasswordError('Please enter a password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Validation passed, perform signup logic
      const newUser = {
        email: email,
        password: password,
        firstName: firstName,
        phoneNumber: num,
      };

      // Perform your signup API call here
      // For example:
      axios.post('http://localhost:8081/auth/register', newUser)
        .then((response) => {
          console.log(response.data);
          // Handle successful signup, e.g., show a success message or redirect to a new page

          window.location.href = '/land'
        })
        .catch((error) => {
          console.error(error.response.data);
          // Handle error during signup, e.g., show an error message
        });
    }
  };

  return (
    <div className='All'>
      <div className='btn'>
        <Link to='/Login'>
          <button style={{ backgroundColor: 'white', border: '1px solid black', padding: '8px 16px' }}>
            Log In
          </button>
        </Link>
      </div>

      <form onSubmit={formHandler}>
        <div className='text'>
          <br />
          <input
            type='text'
            placeholder='Enter your name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && <div style={{ color: 'red' }}>{firstNameError}</div>}
          <br />
          <br />
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
        </div>
        <div>
          <br />
          <input
            type='number'
            placeholder='Enter your number'
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          {numError && <div style={{ color: 'red' }}>{numError}</div>}
          <br />
          <br />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        </div>
        <br />
        
        <button type='submit' style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px' }}>
          Sign Up
          </button>
         
      </form>
    </div>
  );
}

export default Signup;
