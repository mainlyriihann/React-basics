import { useState } from 'react'
// useState se hi useState hook aajayega.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCount] = useState(5)
 //counter, method  
 //let counter = 6;
 const decValue =()=>{
  if(counter<=0) return;
  setCount(counter-1);
 }
const addValue = ()=>{
  
  
  // problem aarhi hai UI updation mein.
  // this will be handled  by react.
  // maanle yahi variable multiple jagah par
  // tha UI mein, toh basically JS mein baar baar
  // get element ye vo karna padna tha.
  // Hooks ke through data updation hota hai UI mein.
  while(counter<0) counter= counter+1;
  setCount(counter+1);
  //setCount method is responsible for doing the math.
 // useState will update 'counter' everywhere.
  // console.log(counter, " value added");
}
/* 
useEffect()
useState()
memocache 
*/
  return (
    <>
    <div className = "bg_Image"></div>
    <div className = "content">
      <h1 className="value-text" id="header">  {counter <= 0 ? "I can only be cool, brdr" : "Nishant"}</h1>
      <h2 className="value-text"> Cool Value : {counter}</h2>
      <button onClick ={addValue} className="value-text">Increase coolness {counter}</button>
      <button onClick = {decValue} className="value-text">Decrease coolness {counter}</button>
      </div>
    </>
  )
}

export default App
