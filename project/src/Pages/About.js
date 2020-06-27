import React, { useState } from "react";
import css from "./colors.module.css";
import Selfies from "./dataselfie";
import ListLogic from "./ListLogic.js";
import Note from "./NoteComponent.js";

function App() {
  const [notes, setNotes] = useState([]);
  let [player, setPlayer] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      console.log(note);
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    console.log("deleted on front end");
  }

  function nowDelete(variable) {
    let deleteRequest = {
      title: variable.title,
      content: variable.content,
    };
    console.log(deleteRequest);
    const options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(deleteRequest),
    };

    const response = fetch("http://localhost:3003/delete", options);
    console.log("This one works");
    return response.json();
  }

  async function displayAudio() {
    const response = await fetch("http://localhost:3005/SoundTrack");
    let data = await response.json();
    setPlayer([data[0]]);
    console.log(data[0]);
  }

  return (
    <div className={css.Moveup}>
      {/* <Selfies /> */}
      <button onClick={displayAudio}>"click for item"</button>
      <ListLogic onAdd={addNote} onDelete={nowDelete} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            className={css.inputField}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <div>
        {player.map((playerItem, index) => {
          return (
            <section key={index}>
              <h1>{playerItem.title}</h1>
              {console.log(playerItem)}
              <audio controls type="audio/mp3/mpeg/ogg" />
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default App;
