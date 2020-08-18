import React, { useState } from "react";

export default function App(props) {
  const [note, setNote] = useState({});
  const [display, setDisplay] = useState([]);

  function handleChange(event) {
    setNote(event.target.files[0]);
    console.log(note);

    setDisplay((prevNote) => {
      return {
        ...prevNote,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(note);
    console.log(note);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(note),
    };

    const response = await fetch("http://localhost:3006/SongDB", options);
    console.log(response);

    setNote("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="title" onChange={handleChange} />
        <button> Click to submit</button>
      </form>
    </div>
  );
}
