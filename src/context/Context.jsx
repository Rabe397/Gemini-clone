import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData , setResultData] = useState("");

    const delayPara = (index,nextWord)=>{
        setTimeout(()=>{
            setResultData(prev=> prev+nextWord);
        },75*index)
    }

    const onSent = async (prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(false);
        setRecentPrompt(input);
        const response = await runChat(input);
        let responseArr = response.split("**");
        let newResponse ;
        for(let i = 0 ; i < responseArr.length ; i++){
            if((i === 0) || (i%2 !== 1)){
                newResponse += responseArr[i];
            }else{
                newResponse += "<b>"+responseArr[i]+"</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i =0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setLoading(false);
        setShowResult(true);
        setInput("");
    }

    // onSent("what is reactjs")
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        input,
        setInput,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;