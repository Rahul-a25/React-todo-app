
import './App.css';
import { FaPlus } from "react-icons/fa";
import {MdDelete } from "react-icons/md";
import { useState } from 'react';
function App() {
   
  const [inputvalue,Setinputvalue]=useState("")
  const[submit,SetSubmit]=useState([])
 
  const changebtn=(e)=>{
     Setinputvalue(e.target.value)
  }
  const plusbtn=()=>{
    if(inputvalue.length>0){
      SetSubmit([...submit,inputvalue])
      Setinputvalue([])
    }
    else{
       
    }
    
  }
  const deletefn=(id)=>{
    const tododelete= submit.filter((ele,ind)=>{
      return ind !==id
    })
    SetSubmit(tododelete)
    
  }
  
  return (
    <>
    <div className="App">
      <h1 style={{textAlign:"center",color:"rgb(217, 76, 76)"}}>Todo App</h1>
           <div className="input">
               <input type="text" value={inputvalue} onChange={changebtn} placeholder='✍ Type something Here' />
               <FaPlus  onClick={plusbtn} className='font'/>
           </div>

{/* output wala section */}
           
            {
              submit.map((ele,ind)=>{
                return(
                  <>
                  <div key={ind} className='output'>
                  <p key={ind} className='contentoutput'>{ele}</p>
                  <MdDelete onClick={()=>deletefn(ind)} className='deleteicon'/>
                  </div>
                  </>
                )
                
              })
            }
           
           {/* </div> */}
           
    </div>
    
 </>
  );
}

export default App;
