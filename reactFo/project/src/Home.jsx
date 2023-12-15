import React from 'react';
import './index.css'
import img1 from './img/arxena-logo.png'
import img2 from './img/new_upload.png'


const Home=()=>{
    return(<>
<div style={{display:'table', width:'100%',paddingLeft:'20px',paddingRight:'20px',height:'100%'}}>
            <div
               style={{display:'table', width:'40%', marginLeft:'30%', textAlign:'center', verticalAlign: 'middle', paddingTop:'8%'}}
               >
               <input style={{display: 'none'}} type="text" name="fakeusernameremembered" />
               <input style={{display: 'none'}} type="password" name="fakepasswordremembered" />
               <img style={{width:'15vw',marginTop:'5px',cursor: 'pointer'}} onClick="new PageContents().changePage('/#')"
                  src={img1}/>


<input id="search_bar_front_page" value="" className="search-bar-front"
                     autoComplete="new-company-entered-by-user"
                     onBlur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)"
                     onFocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)"
                     placeHolder="🔍 Search any company's org chart"
                     style={{display:'table', width:'100%',borderColor:'rgb(232,232,232)', placeHolderColor:'rgb(232,232,232)',height:'3rem', marginTop:'8%'}}
                     onInput="new SearchBarLoadersDropdowns().updateHomePageSearchKeyword(this)"
                     onkeypress="if (event.keyCode === 13) homePageSearch()"/>
                     <input id="search_bar_front_page_raw_text" value="" className="search-bar-front"
                        autocomplete="new-raw_text-entered-by-user"
                        onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)"
                        onfocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)"
                        placeholder="🔍 Which people are you looking for?"
                        style={{display:'table', width:'100%',borderColor:'rgb(232,232,232)', placeholderColor:'rgb(232,232,232)',height:'3rem',marginTop:'8%',display:'none'}}
                        onkeyPress="if (event.keyCode === 13) new SearchBarLoadersDropdowns().updateHomePageSearchRawTextKeyword(this)"/>
                       
<p id="error_home_page" style={{fontSize:'12px', float:'left', marginLeft:'20px',display:'none'}}/>

<div id="front_page_search_bar_loader" style={{textAlign:'right',marginTop: '-6.5%',marginLeft: '-1%',marginBottom:'2%', width:'10%', marginLeft:'85%'}}>
                           <div id="button_dropdown_search_jd" onClick="new SearchBarLoadersDropdowns().placeDropdownBelowSearchforJDInput()" style={{cursor:'pointer', textAlign:'right', marginTop: '-6.25%'}}><img style={{width:'25px'}} src={img2}/></div>
                        </div>
                         </div></div>
                         
                                         

    </>);
};

export default Home;