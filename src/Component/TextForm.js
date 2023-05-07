import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase button is clicked"+ text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleUpClick1=()=>{
        // console.log("Uppercase button is clicked"+ text);
        let newtext1=text.toLowerCase();
        setText(newtext1)
        props.showAlert("Converted to lowercase!","success");
    }
   const handleUpClear=()=>{
        // console.log("Uppercase button is clicked"+ text);
        let newtext1='';
        setText(newtext1)
        props.showAlert("Text has been cleared!","success");
     }
    const handleCopy=()=>{
      let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpaces=()=>{
      let newtext= text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showAlert("Extra spaces removed!","success");
    } 
    const handleOnChange=(event)=>{
        console.log("handleOnChange");
        setText(event.target.value)
    }
     // Declare a new state variable, which we'll call "count"
     const [text, setText] = useState('');
  return (
    <>
  <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
  <h1>{props.Heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}} rows="8"></textarea>
  </div>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick1}>Convert To Lowercase</button>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClear}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>

  <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p>There are {text.length} Characters and {text.split(" ").filter((element)=>{return element.length!==0}).length} Words.</p>
    <p>You can read these words in {0.008*text.split(" ").length} mins.</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter your text in the textbox above to preview."}</p>
  </div>
  </>
  )
}
