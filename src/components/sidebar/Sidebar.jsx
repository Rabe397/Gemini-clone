import React,{useState} from 'react';
import './style.css';
import {FaBars , FaPlus , FaRegQuestionCircle } from 'react-icons/fa';
import {FiSettings } from 'react-icons/fi';
import { MdAccessTime } from 'react-icons/md';

const Sidebar= ()=>{
    const [show,setShow] = useState(false);
    return(
        <div className='sidebar flex-between'>
            <div className="top">
               <FaBars onClick={()=> setShow(!show)}/>
               <div className="chat flex-center">
                  <FaPlus />
                  {show && <p> New Chat</p>}
                </div>
                {
                    show && (
                        <div className="recent">
                          <h3> Recent </h3>
                          <div className="recent-entries">
                            <p> What is react ? </p>
                          </div>
                        </div>
                    )
                }
            </div>
            <div className="bottom">
                <div className={show ? "help flex" : "flex-center"}>
                    <FaRegQuestionCircle />
                    {show && <p> Help </p>}                   
                </div>
                <div className={show ? "activity flex" : "activity flex-center"}>
                    <MdAccessTime />
                    {show && <p> Activity </p>}
                </div>
                <div className={show ? "settings flex" : "flex-center"}>
                    <FiSettings />
                    {show && <p> Settings </p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;