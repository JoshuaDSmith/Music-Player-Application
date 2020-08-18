import React, { useState } from "react";
import css from "./MusicComponent.module.css";
export default function() {
  const [data, getData] = useState([]);
  const [display, setDisplay] = useState([]);

  async function pullMusic() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    let response = await fetch("http://localhost:3006/SoundTrack", options);
    const data = await response.json();
    getData(data);
    console.log();
  }
  return (
    <div>
      <button onClick={pullMusic} />
      <h1>Rendered music</h1>
      {data.map((item, index) => {
        console.log(item);
        return (
          <section className={css.card} key={index}>
            <h1>{item.title}</h1>
          </section>
        );
      })}
    </div>
  );
}
