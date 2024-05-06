import React, { useContext } from 'react'
import "./style.css";
import { FaRegCompass , FaRegLightbulb , FaCode } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineDownload } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { Context } from '../../context/Context';
import GeminiIcon from "../../assets/geminin-icon.png";

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);
  return (
    <main>
       
        {!showResult ? (
             <>
                <div className="container">
                  <h2 className="greet"> Hello, Dev </h2>
                  <h3 class="today"> How can i help you today ? </h3>
               </div>
               <div className="boxes-container">
                 <div className="box">
                   <p> Suggest beautiful places to see on an upcoming road trip </p>
                   <div className="bottom">
                     <FaRegCompass /> 
                   </div>
                 </div>
                 <div className="box">
                   <p> Briefly summarize this concept urban planning </p>
                   <div className="bottom">
                     <FaRegLightbulb /> 
                   </div>
                 </div>
                 <div className="box">
                   <p> Brainstorm team banding activities for our work retreat </p>
                   <div className="bottom">
                     <CiChat1 />
                   </div>
                 </div>
                 <div className="box">
                   <p> Improve the readability of the following code </p>
                   <div className="bottom">
                    <FaCode />
                   </div>
                 </div>
                </div>
             </>
             
          )
          :
          (
            <div className="result">
                <div className="result-title flex">
                    <img src="" alt="user" />
                    <p> {recentPrompt} </p>
                </div>
                <div className="result-data flex">
                    <img src={GeminiIcon} alt="gemini-icon" className="gemini-icon"/>
                    {loading ?
                      <div className="loader">
                        <hr/>
                        <hr/>
                        <hr/>
                      </div>
                    : <p >{resultData} </p>
                    }
                    
                </div>
            </div>
          )
        }
       
        <div className="prompt flex-between">
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder="Enter a prompt here"  />
            <div className="icons flex">
                <RiGalleryLine />
                <MdOutlineDownload />
                <LuSendHorizonal onClick={()=> {onSent()}}/>
            </div>
        </div>
        <p className='dbl-check'> Gemini may display inaccurate info, including about people so double check it's responses, 
                                  your privacy and gemini apps 
        </p>
    </main>
  )
}

export default Main