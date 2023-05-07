import './App.css';
import Alert from './Component/Alert';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react';
import { BrowserRouter ,Route ,Routes } from "react-router-dom";

function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]= useState(null);

  const showAlert=(message, type)=>{
        setAlert({
          msg:message,
          type:type
        })
      setTimeout(() => {
         setAlert(null);
      },2000);  
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background='#042743'
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';//dynamically title change with button
      // setInterval(() => {
      //   document.title='TextUtils - is Amazing';
      // }, 2000); // This is for blinking the title or any alert for the user to do.
    }
    else{
      setMode('light')
      document.body.style.background='white'
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
      // setInterval(() => {
      //   document.title='Install TextUtils - is Amazing';
      // }, 1500); 
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        <Routes> 
          <Route path="about" element={<About mode={mode}/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} Heading="Enter the text Here." mode={mode}/>}/> 
         </Routes>
       {/* <TextForm showAlert={showAlert} Heading="Enter the text Here." mode={mode} /> 
       <About />  */}
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
