import React, { useState } from "react";

export default async function MusicDownload() {
  let [player, setPlayer] = useState([]);

  const response = await fetch("http://localhost:3005/SoundTrack");
  let data = response.json();
  setPlayer([data]);

  return (
    <div>
      {player.map((playerItem, index) => {
        return (
          <section key={index}>
            <h1>{playerItem.title}</h1>
          </section>
        );
      })}
    </div>
  );
}
