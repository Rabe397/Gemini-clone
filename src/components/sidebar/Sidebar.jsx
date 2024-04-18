import React,{useState} from 'react';
import './style.css';
import {FaBars , FaPlus } from 'react-icons/fa';

const Sidebar= ()=>{
    const [show,setShow] = useState(false);
    return(
        <div className='sidebar flex-between'>
            <div className="top">
               <FaBars onClick={()=> setShow(!show)}/>
               <div className="chat flex">
                  <FaPlus />
                  {show && <p> New Chat</p>}
                </div>
                <div className="recent">
                  <h3> Recent </h3>
                </div>
            </div>
            <div className="bottom">
                <div className="help flex">
                    <p className="ques"> ? </p>
                    {show && <p> Help </p>}                   
                </div>
                <div className="activity flex">
                    <p className="ques"> ? </p>
                    {show && <p> Activity </p>}
                </div>
                <div className="settings flex">
                    {/* <FaSetting /> */}
                    {show && <p> Settings </p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;