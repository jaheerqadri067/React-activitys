import React from "react";
import { useState } from 'react';

export default function TextLive() { 
    let [text, setText] = useState("");

    let liveText = (e) => {
        setText(e.target.value)
    }

    return(
        <div className='w-300 p-8 text-2xl bg-black text-white'>
            <input
            className="border-2 border-gray-500 p-2 rounded-md outline-0"
             type='text'
              placeholder='Type Something...'
               onChange={liveText}>
               </input>
            <h2>You type... <br /> {text}</h2>
        </div>
    )
}
