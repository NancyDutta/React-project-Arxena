import React from 'react';
import './index.css'
import Signup from './Signup';
 import Login from './Login';
import Home from './Home';
import AiLogo from './AiLogo';



 const App=()=>{
  return ( <>
  <React.StrictMode id="new_front_page" language="text">
    <div class="desk" id="main_container">
    <div style={{padding:'20px', height:'8vh'}}>
    <div style={{display:'table', width:'100%'}}></div>
    <div style={{display:'table-cell',verticalAalign:'middle'}}></div>
     <Signup/>
    <Login/> 
  
    </div>
    </div>
    <Home/> 
    <AiLogo/>  
    </React.StrictMode>  
    </>
    );
};
    export default App;