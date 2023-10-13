import React, { useState } from "react";


export function TextFrom() {

    // const handleUpClick = () => {

    //   //  setText(text.length)
    //     // for (let index = 0; index < text.length; index++) {
    //     //     const element = array[index];
    //     //     console.log(element)

    //     // }

    // }

    // const handleOnChange = (event) => {

    //     setText(event.target.value)
    //     console.log(event.target.value)

    // }


    // const [text, setText] = useState("");

    // return (
    //     <>
    //         <h1>This is text From</h1>
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-md-7 my-4 mx-4" >
    //                     <input type="text" className="input" placeholder="Enter Text" value={text} onChange={handleOnChange}/>
    //                 </div>
    //                 <div className="col-md-1 my-4">
    //                 <button type="button" className="btn btn-secondary" onClick={handleUpClick}>+</button>
    //                 </div>
    //             </div>

    //         </div>
    //     </>

    // );

    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
  
    function handleSubmit() {
      if (inputValue.trim() !== '') {
        if (editIndex !== null) {
          // If editIndex is not null, update the existing item
          const updatedItems = [...items];
          updatedItems[editIndex] = inputValue;
          setItems(updatedItems);
          setEditIndex(null);
        } else {
          // Add the inputValue to the list of items
          setItems([...items, inputValue]);
        }
        setInputValue(''); // Clear the input field
      }
    }
  
    function handleEdit(index) {
      // Set the input field to the item being edited
      setInputValue(items[index]);
      setEditIndex(index);
    }
  
    function handleDelete(index) {
      // Remove the item at the specified index from the list
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
      setEditIndex(null);
    }
  
    return (
        <>
         <h1>This is text From</h1>
      <div className="container">
      <div className="row">
      <div className="col-md-7 my-4 mx-4" >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        </div>
        <div className="col-md-1 my-4">
        <button type="button" className="btn btn-primary mx-4" onClick={handleSubmit}>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
        </div>
        <ol style={{textAlign: "center"}}>
          {items.map((item, index) => (
            <li style={{width:"0px",display: "flex"}} key={index}>
              {item}
              
              <button type="button" className="btn btn-primary my-2"   style={{marginRight: "18px", marginLeft: "34px",display: "flex"}} onClick={() => handleEdit(index)}>Edit</button>
              <button type="button" className="btn btn-primary my-2"  onClick={() => handleDelete(index)}>Delete</button>
              
            </li>
          ))}
        </ol>
        </div>
      </div>
        </>
    );



}