import React, { useState } from "react";
import css from "./ListLogic.module.css";
import MusicComponent from "./MusicUploadComponent";

function App(props) {
  const [display, setDisplay] = useState([]);
  const [variable, setVariable] = useState({});
  const [truth, setTruth] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await props.onAdd(note);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(note),
    };

    const response = await fetch(
      "http://localhost:3005/bulletinboard",
      options
    );
    if (response.ok) {
      console.log(response);
      return response;
    } else {
      console.log("response unsuccessful");
    }

    setNote({
      title: "",
      content: "",
    });
  }

  async function getData(e) {
    e.preventDefault();
    if (truth === false) {
      setTruth(true);
    } else if (truth === true) {
      setTruth(false);
    }

    const res = await fetch("http://localhost:3005/Notes");
    const data = await res.json();

    setDisplay(data);
  }

  async function getWeather() {
    // if ("geolocation" in navigator) {
    //   console.log("geolocation available");
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log(position.coords.latitude);
    //     console.log(position.coords.longitude);
    //   });
    // } else
  }

  function Posting() {
    try {
      props.onDelete(variable);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={css.Form}>
      <div>
        <MusicComponent />
      </div>
      <div className={css.ImageBorder}>
        <form className={css.NoteInput}>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
          <input
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="add note"
          />
          <button className={css.review} onClick={handleSubmit}>
            ADD COMMENT
          </button>
        </form>
      </div>
      <div className={css.Bulletin}>
        <div className={css.buttongrid}>
          <button style={{ alignItems: "center" }} onClick={getData}>
            Showdb history
          </button>
          <button style={{ alignItems: "center" }}> Delete All Notes</button>
        </div>
        {truth ? (
          <div>
            <div className={css.stylingformat}>
              {display.slice(0, 5).map((display, index) => {
                return (
                  <section key={index} id={index} className={css.inputFielding}>
                    <h2>{display.title}</h2>
                    <p>{display.content}</p>

                    <button
                      onClick={(e) => {
                        setVariable(display);
                        return e.preventDefault(), Posting();
                      }}
                    >
                      {" "}
                      delete{" "}
                    </button>
                  </section>
                );
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
