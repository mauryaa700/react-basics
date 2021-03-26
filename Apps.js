import React, {useState} from 'react';
import Navigation from './component/navigation/Navigation.js'
//import Signin from "./Signin.js";
import './App.css';

const App = () =>{
  const[fullName, setFullName]= useState({
    fname : "",
    lname : "",
    email : "",
    phone : "",
  });

   
   
  const inputEvent=(event)=>{
    //console.log(event.target.value); instede of doing this use object destructuring
    //console.log(event.target.name);
    //const value=event.target.value;
    //const name=event.target.name;
    const {value, name}= event.target;

    
    setFullName((preval)=>{
      console.log(preval);
     return{
         ...preval,
         [name]: value,
     }
    });

  }
  const onSubmits =(event)=>{
    event.preventDefault();
    console.log(alert('your form is submitted'))
  }
  return (
          <>
            <div className="main_div">
              <form onSubmit={onSubmits}>
                <div>
                  <h1>hello, {fullName.fname}_{fullName.lname}</h1>
                  <h2>{fullName.email} </h2>
                  <h3>{fullName.phone}</h3>

                  <input type="text" 
                    placeholder="Enter  first name" 
                    name="fname"
                    onChange={inputEvent} 
                    value={fullName.fname}   
                  />
                  <br/>
                  <input type="text" 
                    placeholder="Enter your last name" 
                    name="lname"
                    onChange={inputEvent} 
                    value={fullName.lname}   
                  />
                  <input type="text" 
                    placeholder="Enter your email" 
                    name="email"
                    onChange={inputEvent} 
                    value={fullName.email}   
                  />
                  <input type="number" 
                    placeholder="Enter your phone no." 
                    name ="phone"
                    onChange={inputEvent} 
                    value={fullName.phone}   
                  />

                  <button className='btn' type="submit">click me </button>
                </div>
              </form>
            </div>
          </>
    );
}


export default App;
