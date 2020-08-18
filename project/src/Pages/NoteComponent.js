import React from "react";
import css from "./AboutSection.module.css";

function Note(props) {
  async function onDelete() {
    props.onDelete(props.id);

    let data = { title: props.title, content: props.content };
    console.log(data);

    try {
      const options = {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch("http://localhost:3003/delete", options);
      if (response.ok) {
        return response.json();
      } else {
        console.log("unsuccessful");
      }
    } catch (error) {
      console.log("saved");
    }
  }

  return (
    <div className={css.gridFormat}>
      <div className={css.inputField}>
        <h1>Note Title: {props.title}</h1>
        <p> {props.content}</p>
        <button onClick={onDelete}> Delete record</button>
      </div>
    </div>
  );
}

export default Note;
