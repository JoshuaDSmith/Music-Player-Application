import React, {useState, useContext} from "react";
import css from "./colors.module.css";

function App() {


    const [display, setDisplay] = useState([])
    const [note, setNote] = useState({
      title: "",
      content:""
    })
    const [notes, setNotes] = useState([])
    
    function handleChange(event) {
      const { name, value } = event.target;
    
      setNote(prevNote => {
    
        return {
          ...prevNote,  
          [name]: value
        };
      });
    } 
    
    
    function handleSubmit(event) {
    event.preventDefault()
    setNotes(prevNote => {
      return [...prevNote, note]
      })
      const data = notes;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };
    
        fetch("http://localhost:3003/Notes", options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.status)
    
           
          console.log("this is successful", data);
    
        
          })
          setNote({
          title: "",
          content:""
        })
       
    }
    
    
    
  
    
    
    function deleteNote(key)  {
      setNotes(prevNotes => {
        return prevNotes.map((noteItem, index) => {
          console.log(noteItem)
          console.log(index)
          return index == index
        })})}
    
    
    function deleteItem() {
     
    }
    // //   const options = {
    // //     method: "POST",
    // //     headers: {
    // //       "Content-Type": "application/json",
    // //       "Access-Control-Allow-Origin": "*",
    // //     },
    // //     body: JSON.stringify(data),
    // //   };
    
    // //     fetch("http://localhost:3003/Notes", options)
    // //     .then((response) => {
    // //       return response.json();
    // //     })
    // //     .then((data) => {
    // //       console.log(data.status)
    
           
    // //       console.log("this is successful", data);
    
        
    // //       })
    
    
    // }
    
    
      return ( 
      <div className={css.gridAbout}>
    <div name="1">
     <form>
       <input name= "title" onChange={handleChange} value={note.title} placeholder="Title" />
       <input name= "content" onChange={handleChange}  value={note.content} placeholder="add note"/>
       <button onClick={handleSubmit}>ADD COMMENT</button>
     </form>
     </div>
     <div name="2">
    { notes.map((noteItem, index) => {
      return <section className={css.inputField} key={index} id={index}>
    
      <h1 >{noteItem.title} </h1> 
      <p > {noteItem.content} </p>
      <button onClick={deleteNote}> Delete this note</button>
    </section> }
    )} 
    </div>
    <div></div>
    <div></div>
    <div name="5">
    <button onClick={getData}>Click for update</button>
    </div>
    <div name="6">
    <h1> Existing Notes</h1>
    
    { display.map((display, index) => {
      return <section className={css.inputFielding} key={index}>
    <h2 >{display.title}</h2>
    <p>{display.content}</p>
    <p> {index}</p>
    <button> delete </button>
    </section>
      
    })}
    
    </div>
    </div>
        
     )   
    }
    
    export default App;