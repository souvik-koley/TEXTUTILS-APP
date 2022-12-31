import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter text here");
  // text="new text"; //wrong way to change the state
  // setText("new text"); //correct way to change the state
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: "+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("coverted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("coverted to lowercase!", "success");
  };
  const handleClear = () => {
    let newText = "";
 setText(newText);
    props.showAlert("text cleared!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </buttom>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </buttom>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          ClearText
        </buttom>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          RemoveExtraSpaces
        </buttom>
        <buttom className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </buttom>
      </div>
      <div
        className="conatiner my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2> Your text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
