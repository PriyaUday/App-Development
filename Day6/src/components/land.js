// import React from 'react'
// // import Button from '@mui/material/Button';
// // import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// // import { padding } from '@mui/system';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import './navbar.css';
// export default function Land() {
//   return (
//     <div><Navbar/>
//     <div className='land'>
   
    
//     <div className='fridge'>
//     <h1 >Book Here !</h1>
  
//     function Signup() {
//       const [firstName, setFirstName] = useState("");
//       const [email, setEmail] = useState("");
//       const [password, setPassword] = useState("");
//       const [num, setNum] = useState("");
    
//     // const[error,setEror]= useState(false)
    
//     const formHandler=(event)=>{
//         event.preventDefault();
//         const obj={
//             firstName:firstName,
//             num:num,
//             password:password,
//             email:email
//             }
            
//     console.log(obj);
    
    
//         //axios.post(ur1/obj);
    
//     }
    
      
//       return (
         
//         <div className='All'>
//         <div className='btn'>
//         <Link to='/Login'>
//         <Button variant="outlined" style={{backgroundColor:"white"}} >Log In</Button>
//         </Link>
//         <Link to='/Signup'>
//         <Button variant="contained" style={{backgroundColor:"black" }}>Sign Up</Button> 
//         </Link>
//         </div>
    
//         <form onSubmit={formHandler}>
    
//         <div className='text'>
//         <br></br><TextField id="outlined-name" label="Enter your name" variant="outlined" value={firstName} onChange={e => setFirstName(e.target.value)} required />
    
//         <br></br>
    
//         <br></br><TextField type="email" id="outlined-name" label="Enter your email" variant="outlined" value={email}  onChange={e => setEmail(e.target.value)} required/><br></br>
        
//         </div>
//         <div> 
//         <br></br>
//         <TextField
//               id="outlined-number"
//               label="Enter your Number"
//               type="number"
//               value={num}
//               onChange={e => setNum(e.target.value)}
//              required
//             />
//             <br></br><br></br>
//         <TextField
//               id="contained-password-input"
//               label="Password"
//               type="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
              
//             />
//         </div>
//         <br/>
//        <Link to='/land'>
//        <Button variant="contained" style={{backgroundColor:"black" }}>Sign Up</Button> 
//         </Link>
//         </form>
    
        
     
//     </div>
//       ) 
//     }
    
//     </div>
//     </div></div>
  
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './navbar.css';
import CarBookingForm from './CarBookingForm';

export default function Land() {
  return (
    <div>
      <Navbar />
      <div className='land'>
      
        <CarBookingForm /> 
        
        <br/><br/><br/><br/>
        
      </div>
    </div>
  );
}