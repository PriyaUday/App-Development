// import React, { useState } from 'react';
// import './CustomerSupportForm.css';
// import Navbar from './Navbar';

// const CustomerSupportForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted');
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="background-container">
//         <div className="customer-support-form">
          
//           <h2>CUSTOMER SUPPORT</h2>
//           <br></br>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label htmlFor="subject">Query:</label>
//             <input
//               type="text"
//               id="subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//             />

//             <label htmlFor="message">Feedback:</label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>

//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerSupportForm;
// CustomerSupportForm.js
//************************
// import React from 'react';
// import { connect, useDispatch } from 'react-redux';
// import Navbar from './Navbar';
// import { caseSuccess } from '../userSlice';

// const CustomerSupportForm = (props) => {
//   const { name, email, subject, message, setName, setEmail, setSubject, setMessage } = props;
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted:', { name, email, subject, message });
//     dispatch(caseSuccess({
//       "name":name,
//       "email":email,
//       "subject":subject,
//       "message":message
//     }))
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="background-container">
//         <div className="customer-support-form">
//           <h2>CUSTOMER SUPPORT</h2>
//           <br />
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label htmlFor="subject">Query:</label>
//             <input
//               type="text"
//               id="subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//             />

//             <label htmlFor="message">Feedback:</label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>

//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CustomerSupportForm
//**************************

// const mapStateToProps = (state) => {
//   return {
//     name: state.name,
//     email: state.email,
//     subject: state.subject,
//     message: state.message,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setName: (name) => dispatch({ type: 'SET_NAME', payload: name }),
//     setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: email }),
//     setSubject: (subject) => dispatch({ type: 'SET_SUBJECT', payload: subject }),
//     setMessage: (message) => dispatch({ type: 'SET_MESSAGE', payload: message }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CustomerSupportForm);
// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { useDispatch } from 'react-redux';
// import { caseSuccess } from '../userSlice';

// const CustomerSupportForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted:', { name, email, subject, message });
//     dispatch(caseSuccess({
//       "name": name,
//       "email": email,
//       "subject": subject,
//       "message": message
//     }))
//     console.log(name);
//     console.log(email);
//     console.log(subject);
//     console.log(message);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="background-container">
//         <div className="customer-support-form">
//           <h2>CUSTOMER SUPPORT</h2>
//           <br />
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label htmlFor="subject">Query:</label>
//             <input
//               type="text"
//               id="subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//             />

//             <label htmlFor="message">Feedback:</label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>

//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerSupportForm;
import React, { useState } from 'react';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { caseSuccess } from '../userSlice';

const CustomerSupportForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { name, email, subject, message });
    dispatch(caseSuccess({
      "name": name,
      "email": email,
      "subject": subject,
      "message": message
    }));
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
  };

  return (
    <div>
      <Navbar />
      <div className="background-container">
        <div className="customer-support-form">
          <h2>CUSTOMER SUPPORT</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="subject">Query:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <label htmlFor="message">Feedback:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

           <button
              type="submit"
              style={{ padding: '10px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.2s' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportForm;
