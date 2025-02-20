"use client";
import Colors from "@/data/Colors";
import Lookup from "@/data/Lookup";
import { ArrowRight, Link } from "lucide-react";
import React,{useState} from "react";
import { useContext } from "react";
import { MessageContext } from "../../../context/MessageContext";

function Hero() {
    const [userInput, setUserInput] = useState();
    const {messages, setMessages} = useContext(MessageContext);
    const onGenerate= (input)=>{
        setMessages({
            role:'user',
            content:input
        });
    }

  return (
    <div className="flex flex-col items-center mt-28 xl:mt-20 gap-2">
      <h2 className="font-bold text-4xl">{Lookup.HERO_HEADING} </h2>
      <p className="text-blue-200 font-medium">{Lookup.HERO_DESC}</p>
      <div className="p-5 border rounded-xl max-w-xl w-full mt-3"
      
      style={{backgroundColor: Colors.BACKGROUND
      }}
      >
        <div className="flex gap-2">
          <textarea
            placeholder={Lookup.INPUT_PLACEHOLDER}
            onChange={(e) => setUserInput(e.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none"
          />
          {userInput && <ArrowRight 
          onClick={() => onGenerate(userInput)}
          className="bg-blue-500 p-2 h-10 w-10 rounded" size={24} />}
        </div>
        <div className="flex justify-end mt-2">
          <Link />
        </div>
      </div>
    <div className='flex flex-wrap max-w-2xl items-center justify-center gap-2 mt-8'>
        {Lookup?.SUGGSTIONS.map((suggestion, index) => (
            <h2 key={index}
            onClick={() => onGenerate(suggestion)}
            className= 'border rounded-xl p-2 text-sm font-medium cursor-pointer text-blue-300 hover:bg-blue-300 hover:text-black'
            >{suggestion}</h2>
        ))}
    </div>

    </div>
  );
}

export default Hero;
