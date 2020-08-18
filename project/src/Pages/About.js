import React, { useState } from "react";
import css from "./AboutSection.module.css";
import Selfies from "./dataselfie";
import ListLogic from "./ListLogic.js";
import Note from "./NoteComponent.js";

function App() {
  const [notes, setNotes] = useState([]);
  let [Musicplayer, setMusicPlayer] = useState([]);

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

    const response = fetch("http://localhost:3005/delete", options);
    console.log("This one works");
    return response;
  }

  async function displayAudio() {
    const response = await fetch("http://localhost:3005/SoundTrack");
    let data = await response.json();
    setMusicPlayer([data[0]]);
    console.log(data[0]);
  }

  return (
    <div className={css.NoteComponent}>
      <ListLogic onAdd={addNote} onDelete={nowDelete} />
      <div className={css.gridLayout}>
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
      </div>
      <div>
        {Musicplayer.map((playerItem, index) => {
          return (
            <section key={index}>
              <h2>{console.log(index)}</h2>
              <h2>{playerItem.title}</h2>
              {console.log(playerItem)}
              <audio controls type="audio/mp3/mpeg/ogg" />
            </section>
          );
        })}
      </div>
      <button onClick={displayAudio}>"click for item"</button>
    </div>
  );
}

export default App;
