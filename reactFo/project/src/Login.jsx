import React from 'react';
import './index.css'

const Login =()=>{
    return(<>
 <div id="log_in_button_front_page"
               style={{ display:'table-cell',
  verticalAlign:'middle',
  width: '190px',
   textAlign:'right',
    paddingRight:'20px'}}>
               <div className="landing_white_button"
                  style={{display:'inline-block',
   backgroundColor:'white',
   border:'1px solid rgb(36,116,204)',
    color:'rgb(36,116,204)',
     width:'150px'}}
                  >Log in</div>
            </div>
    </>);
};
export default Login;