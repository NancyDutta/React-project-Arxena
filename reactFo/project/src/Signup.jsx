import React from 'react';
import './index.css'
const Signup=()=>{
    return (
        <>
<div id="sign_up_button_front_page"
               style={{display:'table-cell' ,verticalAlign:'middle', width: '190px', textAlign:'right'}}>
               <div className="landing_white_button"
                  style={{display:'inline-block', backgroundColor:'rgb(36,116,204)',borderColor:'rgb(36,116,204)', color:'white', width:'150px'
}}
onClick="new PageContents().changePage('/signup')" >Sign up</div>
            </div></>);
};
export default Signup;