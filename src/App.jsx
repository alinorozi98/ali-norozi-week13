import Tabs from './Tabs'
import { useState , useEffect } from "react";
import './App.css'
import Content from './Content';

function App() {
   const [counter, setCounter] = useState(() => {
    return localStorage.getItem("selectedLanguage") || "Javascript";
  });
  useEffect(() => {
    localStorage.setItem("selectedLanguage", counter);
  }, [counter]);
  
  return (
    <>
     <div className='header'>
      <h1>Programming Languages</h1>
      <Tabs counter = {counter} setCounter= {setCounter} />
    </div>
    <Content data={counter} />
    </> 
  )
}

export default App
