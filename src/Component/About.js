import React, { useState } from 'react'

export default function About(props) {
    // const[myStyle,setmyStyle]= useState(
    //     {
    //      color:'black',
    //      backgroundColor:'white'
    //     })
          
    let myStyle={
      color:props.mode === 'dark'?'white':'#042743',
      backgroundColor:props.mode === 'dark'?'#042743':'white',
      border:'2px solid',
      borderColor:props.mode === 'dark'?'white':'#042743'
    }


    //     const[Btntext,setBtnText]= useState('Enable Dark Mode')
    //     const toogleStyle=()=>{
    //          if(myStyle.color === 'black'){
    //              setmyStyle({
                     
    //                      color:'white',
    //                      backgroundColor:'black',
    //                      border:'1px solid white'
                         
    //                  })
    //                 setBtnText('Enable White Mode')

    //          }
    //          else{
    //              setmyStyle({
    //                  color:'black',
    //                  backgroundColor:'white'
                 
    //          })
    //          setBtnText('Enable Dark Mode')
    //     }
    // }
  return (
    <div className="container">
    <h2>About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Introduction of textUtils</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">A TextUtils is a application that enables users to create, change, or edit plain text files.They're often used to craft complex code for websites; read, create and edit source code text files.A textutils is a tool that allows a user to create and revise documents in a computer.
      <p><b>Basically it is built by the use of React Js.</b></p></div>
    </div>
    </div>
    <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Features of textUtils</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">You can convert the text in Uppercase and Lowercase and also you can clear the text.You can also copy the text to the clipborad and also remove the extra spaces from the two characters and between the two words.</div>
    </div>
    </div>
   <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       <strong>Thanks for using</strong> 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">I hope my users will be happy to use my textutils application.This is my little project for the users.</div>
    </div>
    </div>
   </div>
   {/* <div className="container my-3">
    <button onClick={toogleStyle} type="button" className="btn btn-primary">{Btntext}</button>
   </div> */}
</div>
  )
}
