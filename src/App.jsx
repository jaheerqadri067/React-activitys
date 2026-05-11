import React from "react";
import { useState } from 'react'
import './App.css'


import ProductList from './ProductList.jsx'
import Form from "./Form"

import Counter from './Counter.jsx'
import LikeButton from './LikeButton.jsx'
import Show from './Show.jsx'
import Color from './Color.jsx'
import TextLive from './TestLive.jsx'
import LudoBoard from './LudoBoard.jsx'
import List from './List.jsx'

import Ticket from './Ticket.jsx'

function Description() {
  return(
    <>
      <span>Hii there!</span>
      <p>Hello</p>
    </>
  )
}
function PrintHello() {
  console.log("btn was clicked!")
}
function SayHello() {
  return(
    <div>
      <button onClick={PrintHello}>click me!</button>
    </div>
  )
}




function App() {
  return (
    <>
    {/* <Ticket />
    <Counter />
    <LikeButton />
    <Show /> */}


    {/* <Color /> */}
    <TextLive /> 
    
{/* 
    <h1>Ludo Board</h1>
    <LudoBoard />
    <List /> */}

      {/* <Description></Description>
      <ProductList></ProductList>
      <SayHello></SayHello>
      <Form/> */}
    </>
  )
}
export default App







// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to le
//         arn more
//       </p>
//     </>
//   )
// }
//export default App

