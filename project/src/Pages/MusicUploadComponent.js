import React, { useState } from "react";
import css from "./MusicComponent.module.css";

var nodemailer = require("nodemailer");

export default function Picture() {
  const [SelectMusic, setSelectMusic] = useState({});
  const [Music, setMusic] = useState([]);

  async function AudioChecker(event) {
    await setSelectMusic(event.target.files);
  }

  async function displayMusic() {
    setMusic([SelectMusic[0]]);
    let reader = new XMLHttpRequest();
    reader.open("GET", "/audio.mp3");
    reader.responseType = "arraybuffer";

    reader.onload = function(e) {
      let blob = new Blob([reader.response], { type: "audio/mp3" });
      let url = URL.createObjectURL(blob);

      console.log(url + "this is url");
      var file = Music;
      file.src = url;
      console.log(blob + "this is the blob");

      //This method only stores the string values of the file, not the file itself.
      async function postage() {
        let data = {
          title: SelectMusic[0].name,
          size: blob,
          type: blob.type,
        };

        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": false,
              processData: false,
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
            //Changing data to blob serves up an empty object to my server
          };

          const response = await fetch("http://localhost:3006/SongDB", options);
          console.log(response);
          return response;
        } catch (err) {
          console.log("response unsuccessful");
        }
      }
      postage();
    };
    reader.send();
  }

  return (
    <div className={css.MusicComponent}>
      <div>
        <label class="custom-file-upload">
          <input type="file" onChange={AudioChecker} />
          <button onClick={displayMusic}> Upload Track</button>
        </label>
      </div>

      <div className={css.mappedOptions}>
        {Music.map((file, index) => {
          return (
            <section key={index} id={index}>
              {" "}
              <h1>{file.name}</h1>
              <audio
                src={URL.createObjectURL(file)}
                controls
                type="audio/mp3/mpeg/ogg"
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}

// let reader = new FileReader();
// reader.readAsDataURL(SelectMusic[0]);
// reader.onload = (e) => {
//   const url = "http://localhost:3005/SongDB";
//   const formData = { file: e.target.result };
//   return post(url, formData).then((response) =>
//     console.warn("result", response)
//   );
// };
// }
