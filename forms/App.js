import React, {useState} from 'react';
import Navigation from './component/navigation/Navigation.js'
//import Signin from "./Signin.js";
import './App.css';

const App = () =>{
  const[name, setname]= useState("");
  const[fullName, setFullName]= useState();
  const[lastName, setLastName]= useState();
  const [myLName, setMyLName]=useState();

  const inputEvent=(event)=>{
    setname(event.target.value);
  }
  const inputEvent2=(event)=> {
    setLastName(event.target.value);
  }

  const onSubmits =(event)=>{
    event.preventDefault();
    setFullName(name);
    setMyLName(lastName);
  }
  return (
          <>
            <div>
              <form onSubmit={onSubmits}>
                <div>
                  <h1>hello, {fullName} {myLName}</h1>
                  <input type="text" 
                    placeholder="Enter  first name" 
                    onChange={inputEvent} 
                    value={name}   
                  />
                  <br/>
                  <input type="text" 
                    placeholder="Enter your last name" 
                    onChange={inputEvent2} 
                    value={lastName}   
                  />

                  <button className='btn' type="submit">click me </button>
                </div>
              </form>
            </div>
          </>
    );
}


export default App;
