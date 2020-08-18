import React, { useState } from "react";
import NoteComponent from "./MusicMapper.js";
import css from "./MusicComponent.module.css";
import DataBaseTracks from "./DatabaseTracks";
export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <div>
      <NoteComponent onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <div className={css.renderedCard}>
            <section
              className={css.callingCard}
              key={index}
              id={index}
              //onAdd={addNote}
            >
              <h2>Calling Card: {index}</h2>
              <h1> Music File: {noteItem.name}</h1>
              <p> File Size: {noteItem.size}KB</p>
              <audio
                className={css.audio}
                src={URL.createObjectURL(noteItem)}
                controls
                type="audio/mp3/mpeg/ogg"
              />
            </section>
          </div>
        );
      })}

      <DataBaseTracks />
    </div>
  );
}
